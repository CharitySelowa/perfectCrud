const client = require('../configs/db')






//edit todolist
module.exports = update = async (req,res)=>{
    try {
    
        const {title,description}= req.body
    
        await client.query('UPDATE todolist SET title=$1,description=$2 WHERE todo_id=1',[title,description],(err)=>{
           if(err){
            res.status(400).json({
               error:'unable to create todolist databae error'
            })
           }else{
               res.status(200).json({
                   message:'succesfully created a todolist'
               })
           }
        })
    
    } catch (error) {
      if(error){
            res.status(200).json({
                err:'Error catched'
        })
      }
     }
    }