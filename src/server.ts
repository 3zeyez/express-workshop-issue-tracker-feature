import express, {Request, Response} from "express";
import dotenv from "dotenv";
import { healthcheck } from "./routes";

dotenv.config();
export let app = express();

const PORT = process.env.PORT;

app = new healthcheck(app);

app.listen(PORT, () => {
    console.log("Server is running at ", `http://localhost:${PORT}`);
}).on("error", (err: Error) => {
    throw new Error(err.message);
})