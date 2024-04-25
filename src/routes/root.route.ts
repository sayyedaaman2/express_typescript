import { Router } from "express";

// All Root Routes (Resources )
import BookRouter from "./book.route";
import AuthorRoute from "./author.route";





// Root Routes all the resource

const RootRoute  = Router();


RootRoute.use('/book',BookRouter);
RootRoute.use('/author',AuthorRoute);


export default RootRoute;