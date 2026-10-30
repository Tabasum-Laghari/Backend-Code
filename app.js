const express=require('express')
const  bodyParser = require('body-parser')
const cors = require ('cors')

const db = require('./db')

const app  = express()
const port= process.env.PORT||500

app.use(cors())
app.use(bodyParser.json())

app.get('/',(req,res)=>{
res.send("Hello Taj");})

app.listen(port,()=>{
console.log(`server is running on port : http://localhost: ${port}`)})