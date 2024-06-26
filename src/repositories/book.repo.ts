import AppDataSource from "../database/db.config";
import { BookEntity } from "../entities/book.entity";

export default class BookRepo {

    public static findAllBooks() {
        return AppDataSource.getRepository(BookEntity).find();
    }

    public static findBookById(id: number) {
        return AppDataSource.getRepository(BookEntity).findOne({where: {id : id}});
    }

    public static deleteBook(id: number) {
       return AppDataSource.getRepository(BookEntity).delete(id);
    }

    public static addBook(book: BookEntity) {
        return AppDataSource.getRepository(BookEntity).save(book);
    }

    // update Assingment paractice
    // public static updateBook(id: number, book: BookEntity) {
    //     // Find the book with the given ID
    //     let bookIndex = this.data.findIndex((book) => book.id === id);
    
    //     // If the book with the given ID is not found, return
    //     if (bookIndex === -1) {
    //         console.error('Book not found');
    //         return;
    //     }
    
    //     // Update the book properties with the values provided in the book
    //     this.data[bookIndex] = {
    //         ...this.data[bookIndex], // Copy existing book properties
    //         title: book.title !== undefined ? book.title : this.data[bookIndex].title,
    //         author: book.author !== undefined ? book.author : this.data[bookIndex].author,
    //         sellingPrice: book.sellingPrice !== undefined ? book.sellingPrice : this.data[bookIndex].sellingPrice,
    //         purchasePrice: book.purchasePrice !== undefined ? book.purchasePrice : this.data[bookIndex].purchasePrice
    //     };
    // }
    


}