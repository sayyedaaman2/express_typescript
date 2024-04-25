import express, {Request,Response} from "express"

const app = express();


// Controllers Routes


app.get("/", (req:Request, res:Response)=>{
    res.send("Welcome To Express Server with TS !!!")
});



app.listen(3000,()=>{
    console.log(`Server has Started On Port 3000`)
})



