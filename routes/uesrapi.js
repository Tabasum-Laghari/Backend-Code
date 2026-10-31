const express=require('express');
const router = express.Router();
const user = require('./user')
router.post('/adduser',async(req,res)=>{
try{


    const newUser = new User({

user_name:req.body.user_name,
user_email:req.body.user_email,
gender:req.body.gender
})

const saveuser = await newUser.save()
res.json(saveuser)

}
catch(error){
res.status(500).json({'error':error})
}
})


router.get('/viewuser',async(req,res)=>{

try {
    
const user = await user.find()
res.json(user)




} catch (error) {
   res.status(500).json({'Error':error}) 
}









})









module.exports = router;