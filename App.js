import express from 'express'
import Lab5 from "./Lab5.js";
import Hello from "./Hello.js"
import cors from "cors";
const app = express()
app.use(cors());
Hello(app)
Lab5(app);
app.listen(4000)
