import express, {Request,Response} from "express"
import RootRoute from "./routes/root.route";

const app = express();

// Express jons middleware for parsing json to js object (req.body)
app.use(express.json());

app.use("/",RootRoute);

app.listen(3000,()=>{
    console.log(`Server has Started On Port 3000`)
})



