import { BookEntity } from "../entities/book.entity";
import { BookRequestPayload } from "../request/book.reqeust";
import { BookResponse } from "../response/book.response";


export default class BookMapper {
    public static requestToEntityMapper(requestPayload: BookRequestPayload) {
        let bookEntity =  new BookEntity();
        bookEntity.title = requestPayload.bookName
        bookEntity.author = requestPayload.authorName
        bookEntity.sellingPrice = requestPayload.sp
        bookEntity.purchasePrice = requestPayload.pp
        
        // let bookEntity: BookEntity = {
        //     author: requestPayload.authorName,
        //     purchasePrice: requestPayload.pp,
        //     sellingPrice: requestPayload.sp,
        //     title: requestPayload.bookName,
        //     id: requestPayload.bookId
        // }
        return bookEntity;
    }

    public static entityToResponseMapper(entity: BookEntity): BookResponse {
        let bookResponse: BookResponse = {
            author: entity.author,
            sellingPrice: entity.sellingPrice,
            title: entity.title,
            // purchase price not mapped
            id: entity.id
        }
        return bookResponse;
    }
}