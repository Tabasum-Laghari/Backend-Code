const mongoose=require('mongoose')
const usershema = new mongoose.schema({

})


const userShmea = new mongoose.shema({
})


const userSchema = new mongoose.Schema({
    user_name:{


        type:String,
        required:true

    },


    user_email:{


        type:email,
        required:true
    },

    gender:{
    type:String,

    enum:['male','female'],
    default : Male
}




})


module.exports = moongoe.modal('db___user',userShmea)