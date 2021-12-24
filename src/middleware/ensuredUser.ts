import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPlayload {
    sub: string
}

export async function ensuredUser(req: Request, res: Response, next: NextFunction) {
    const tokenHeader = req.headers.authorization
    if (tokenHeader) {
        const [, token] = tokenHeader.split(' ')
        if (token) {
            try {
                if (verify(token, process.env.JWT_KEY) as IPlayload) {
                    const { sub } = verify(token, process.env.JWT_KEY) as IPlayload
                    if (sub) req.user_id = sub
                }
                else if (verify(token, process.env.JWT_KEY_ADMIN) as IPlayload) {
                    const { sub } = verify(token, process.env.JWT_KEY_ADMIN) as IPlayload
                    if (sub) req.user_id = sub
                }

                return next()
            } catch (error) {
                return res.status(401).json({ message: "Token invalid!" })
            }
        } else {
            return res.status(401).json({ message: "UnAuthorizade" })
        }
    }else return res.status(401).json({message: "Token Invalid or empty!!"})
}