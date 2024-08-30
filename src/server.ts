import express, {Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get('/healthcheck', (req: Request, res: Response) => {
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .send(JSON.stringify({"msg": "Server is up!"}));
})

app.listen(PORT, () => {
    console.log("Server is running at ", `http://localhost:${PORT}`);
}).on("error", (err: Error) => {
    throw new Error(err.message);
})