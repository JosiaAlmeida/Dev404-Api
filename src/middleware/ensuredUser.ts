import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPlayload{
    sub: string
}

export async function ensuredUser(req: Request, res: Response, next: NextFunction) {
    const tokenHeader = req.headers.authorization

    const [, token] = tokenHeader.split(' ')
    if (token) {
        try {
            const { sub } = verify(token, process.env.JWT_KEY) as IPlayload

            req.user_id = sub
            return next()
        } catch (error) {
            return res.status(401).json({ message: "Token invalid!" })
        }
    } else {
        return res.status(401).json({ message: "UnAuthorizade" })
    }
}