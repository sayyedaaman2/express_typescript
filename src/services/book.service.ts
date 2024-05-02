import BookRepo from "../repositories/book.repo";
import { BookRequestPayload } from "../request/book.reqeust";
import { BookEntity } from "../entities/book.entity";
import BookMapper from "../mappers/book.mapper";
import { BookResponse } from "../response/book.response";

export default class BookService {
    // add book
    // Client side parameter reqeust payload
    public static async addBook(requestPayload : BookRequestPayload ){

      
        await BookRepo.addBook(BookMapper.requestToEntityMapper(requestPayload));
        return "success";
    }
    //delete book
    public static async deleteBook(id : number){
        await BookRepo.deleteBook(id);
        return "success"
    }
    // find all book
    public static async findAllBooks(){
        let data:BookResponse[] = (await BookRepo.findAllBooks()).map((book)=>{
            return BookMapper.entityToResponseMapper(book);
        })
        return data;
    }
    // find by Id
    public static async findBookById(id : number){
        let bookEntity  = await BookRepo.findBookById(id);
        if(bookEntity){

            let bookResponse = BookMapper.entityToResponseMapper(bookEntity)
            return bookResponse;
        }else {
            return "Book Does Not Exists !"
        }
    }
    // // update book
    // public static updateBook(id:number , payload : BookRequestPayload){
    //     BookRepo.updateBook(id,BookMapper.requestToEntityMapper(payload));
    //     return "success"
    // }
}