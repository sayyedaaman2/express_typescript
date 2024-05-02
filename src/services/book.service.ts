import BookRepo from "../repositories/book.repo";
import { BookRequestPayload } from "../request/book.reqeust";
import { BookEntity } from "../entities/book.entity";
import BookMapper from "../mappers/book.mapper";
import { BookResponse } from "../response/book.response";

export default class BookService {
    // add book
    // Client side parameter reqeust payload
    public static addBook(requestPayload : BookRequestPayload ){

      
        BookRepo.addBook(BookMapper.requestToEntityMapper(requestPayload));
        return "success";
    }
    //delete book
    public static deleteBook(id : number){
        BookRepo.deleteBook(id);
        return "success"
    }
    // find all book
    public static findAllBooks(){
        let data:BookResponse[] = BookRepo.findAllBooks().map((book)=>{
            return BookMapper.entityToResponseMapper(book);
        })
        return data;
    }
    // find by Id
    public static findBookById(id : number){
       let bookResponse =  BookMapper.entityToResponseMapper(BookRepo.findBookById(id))
        return bookResponse;
    }
    // update book
    public static updateBook(id:number , payload : BookRequestPayload){
        BookRepo.updateBook(id,BookMapper.requestToEntityMapper(payload));
        return "success"
    }
}