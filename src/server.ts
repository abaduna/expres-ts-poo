import express from "express"
import morgan from "morgan"
import cors from "cors"

class ServerBootstrap {
    public app:express.Application = express()

    private port:number = 8000

    constructor(){
        this.app.use(express.json())
        this.listen()
    }

    public listen(){
        this.app.listen(this.port,()=>{
            console.log(`server listen in ${this.port}`);
            
        })
    }
}

new ServerBootstrap()