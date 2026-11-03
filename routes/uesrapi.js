// Api CRUD Operation

const express=require('express');
const router = express.Router();
const user = require('./user')

// Add Data Api
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



// Read data api

router.get('/viewuser',async(req,res)=>{

try {
    
const user = await user.find()
res.json(user)


} catch (error) {
   res.status(500).json({'Error':error}) 
}
})



//update Api


router.put('/updateuser/:userid',async (req,res)=>{

const userid = req.params.userid

try {



    const users =await  users.findByIdAndUpdate(
       uid,
       {$set:req.body},
       {new:true}
    )
    res.json(users)
} catch (error) {
    res.status(500).json({'error':error})
    
}


})




// delet Api

router.delete('/deleteuser/:userid',async(req,res)=>{

const uid = req.params.userid
try {

const users=await User.findByIdAndDelete(uid)
res.status(200).json({'msg':'user Id deleted','sts':'1'})
    
} catch (error) {


    res.status(500).json({'error':error})
}


})




module.exports = router;