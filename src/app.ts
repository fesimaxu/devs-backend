import express, { Request, Response, NextFunction } from 'express';
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index";
import organizationRouter from "./routes/organization";
import userRouter from "./routes/user"

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/organization", organizationRouter);
app.use("/user", userRouter);

export default app;

// Closure
// function logAuthenticated(log: boolean) { 
//     // const 
//     return function logMiddleware(req: Request, res: Response, next: NextFunction) {
//         if (log === true) {

//         }
//         res.send("Authenticated");
//     }
// }

// app.use(logAuthenticated(false))
// function firstMiddleware(req: Request, res: Response, next: NextFunction) {
//     // if (req.method.toLowerCase() === 'get') {
//     //     res.send("This is to gets data")
//     //     return;
//     // }
//     // next();
//     // console.log(req.headers.authorization);
//     if(req.headers.authorization !== "Bearer 12345") {
//         res.send("You are not an authenticated user");
//         return;
//     }
//     next();
// }

// function secondMiddleware(req: Request, res: Response, next: NextFunction) {
//     res.send("Authenticated");
// }

// app.use("/api", firstMiddleware, secondMiddleware);

// app.use("/api/users", getUsers);
// app.use("/api/users/admin", newMiddleware, getAdmin);