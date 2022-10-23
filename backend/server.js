const express=require("express")
const app=express()
const cors=require("cors")

// const pool = require("./app/configs/db")
const client = require("./app/configs/db")
const todo = require('../backend/app/routes/todolist')


require('../backend/app/configs/dotenv')


app.use(express.json())
const corsoption = {
origin:['http://localhost:4200']
}   



app.use(cors(corsoption))

const port=process.env.port || 5050


// app.use('/', (req,res) =>{   //send a json format message to thunderclient or postman
//     res.status(200).json({
//         message:'ready to go'
//     })
// })


app.use('/api',todo)



//check if database is connected
client.connect((error)=>{ 
    if(error){
    console.log("unable to connect")
    }
    else{
        console.log("database connected")
    }
})

app.listen(port,process.env.baseURL,()=>{
    console.log(`Server is up an ready to go at port ${port}`)
})