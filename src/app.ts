import express, {Request,Response} from "express"
import RootRoute from "./routes/root.route";
const app = express();

app.use("/",RootRoute);

app.listen(3000,()=>{
    console.log(`Server has Started On Port 3000`)
})



