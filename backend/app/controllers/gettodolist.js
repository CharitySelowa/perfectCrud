const client = require('../configs/db')

//create todolist
module.exports = gettodolist = async (req,res)=>{
try {

   

    await client.query('SELECT * FROM todolist',(err,results)=>{
       if(err){
        res.status(400).json({
           error:'data not selected'
        })
       }else{
           res.status(200).send(results.rows)
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




