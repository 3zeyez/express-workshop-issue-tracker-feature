import { Request, Response } from "express";

export default class {
    check(req: Request, res: Response) {
        res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .send(JSON.stringify({"msg": "Server is up!"}));
    }
}