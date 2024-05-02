import { Request, Response, Router } from "express";
import BookService from "../services/book.service";
import { BookRequestPayload } from "../request/book.reqeust";


const BookRouter = Router();

BookRouter.get("/findAll", async (req: Request,res:Response)=>{
    res.json( await BookService.findAllBooks());
})

BookRouter.post("/add", async (req: Request,res:Response)=>{
  res.json( await BookService.addBook(req.body as BookRequestPayload));

})

BookRouter.get("/findById/:id", async (req: Request,res:Response)=>{
  
   res.json( await BookService.findBookById(Number(req.params.id)));

})

BookRouter.get("/delete/:id", async (req: Request,res:Response)=>{
    res.json( await BookService.deleteBook(Number(req.params.id)));

})

// update route

// BookRouter.put("/update/:id", async(req:Request, res:Response)=>{
//     res.json( await BookService.updateBook(Number(req.params.id),req.body as BookRequestPayload))

// })

export default BookRouter;