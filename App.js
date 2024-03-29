import express from 'express'
import Lab5 from "./Lab5.js";
import Hello from "./Hello.js"
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import cors from "cors";
const app = express()
app.use(cors());
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
Hello(app)
Lab5(app);
app.listen(4000)

