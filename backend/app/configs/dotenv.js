const dotenv =require("dotenv")

if(process.env.NODE_ENV !=="production"){
    dotenv.config();
}

//process env info inside java file