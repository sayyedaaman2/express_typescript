import { NextFunction,Request, Response } from "express"

export const loggingMiddleware = (req: Request, res:Response, next : NextFunction)=>{
   
    const protocol = req.protocol;
    const host = req.get("host");
    const url = req.originalUrl;
    const httpMethod = req.method;
    const date = new Date();

    console.log(protocol  +  " " + host +  " "  + url  + " " + httpMethod +  " " + date.toDateString());
    next();
}