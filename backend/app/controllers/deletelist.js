const client = require('../configs/db')

//create todolist
module.exports = deletelist = async (req,res)=>{
try {

    const {id}= req.body

    await client.query('DELETE FROM todolist WHERE todo_id=$1',[id],(err)=>{
       if(err){
        res.status(400).json({
           error:'unable to delete todolist databae error'
        })
       }else{
           res.status(200).json({
               message:'succesfully deleted a todolist'
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




