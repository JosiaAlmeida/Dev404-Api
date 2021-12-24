import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPlayload{
    sub: string
}

export async function ensuredAdmin(req: Request, res: Response, next: NextFunction) {
    const tokenHeader = req.headers.authorization

    const [, token] = tokenHeader.split(' ')
    console.log(token)
    if (token) {
        try {
            const { sub } = verify(token, process.env.JWT_KEY_ADMIN) as IPlayload

            req.user_id = sub
            return next()
        } catch (error) {
            return res.status(401).json({ message: "Token invalid!" })
        }
    } else {
        return res.status(401).json({ message: "UnAuthorizade" })
    }
}