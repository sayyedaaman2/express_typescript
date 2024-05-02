import {DataSource} from 'typeorm'
import path from "path"

const AppDataSource = new DataSource({
    type : "postgres",
    host : "127.0.0.1",
    port : 5432,
    username : "postgres",
    password : "postgres",
    database : "books_db",
    synchronize : true,
    logging : true,
    entities : [path.join(__dirname,"..","/entities/../**/**.entity{.ts,.js}")]
})


export default AppDataSource;