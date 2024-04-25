import { Request, Response, Router } from "express";


const AuthorRoute = Router();

AuthorRoute.get("/findAll",(req: Request,res:Response)=>{
    res.send("This route will send all the author");
})

AuthorRoute.post("/add",(req: Request,res:Response)=>{
    res.send("This route will add the author");
})



export default AuthorRoute;