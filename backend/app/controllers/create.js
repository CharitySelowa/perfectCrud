const client = require('../configs/db')

//create todolist
module.exports = create = async (req,res)=>{
try {

    const {title,description}= req.body

    await client.query('INSERT INTO todolist(title,description) VALUES($1,$2)',[title,description],(err)=>{
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




