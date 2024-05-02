import express, {Request,Response} from "express"
import RootRoute from "./routes/root.route";
import AppDataSource from "./database/db.config";
import { loggingMiddleware } from "./middlewares/loggingMiddleware";

const app = express();

// Express jons middleware for parsing json to js object (req.body)
app.use(express.json());
app.use(loggingMiddleware);
app.use("/",RootRoute);


AppDataSource.initialize().then(()=>{
    console.log("Database has been initialized");
    
    
    app.listen(3000,()=>{
        console.log(`Server has Started On Port 3000`)
    })
    

}).catch(()=>{
    console.log("Database Initilization Failed !!!");
})





