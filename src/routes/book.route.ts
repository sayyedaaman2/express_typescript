import { Request, Response, Router } from "express";
import BookService from "../services/book.service";
import { BookRequestPayload } from "../request/book.reqeust";


const BookRouter = Router();

BookRouter.get("/findAll",(req: Request,res:Response)=>{
    res.json(BookService.findAllBooks());
})

BookRouter.post("/add",(req: Request,res:Response)=>{
    res.json(BookService.addBook(req.body as BookRequestPayload));

})

BookRouter.get("/findById/:id",(req: Request,res:Response)=>{
  
    res.json(BookService.findBookById(Number(req.params.id)));

})

BookRouter.get("/delete/:id",(req: Request,res:Response)=>{
    res.json(BookService.deleteBook(Number(req.params.id)));

})

// update route

BookRouter.put("/update/:id",(req:Request, res:Response)=>{
    res.json(BookService.updateBook(Number(req.params.id),req.body as BookRequestPayload))

})

export default BookRouter;