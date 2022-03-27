const mongoose=require('mongoose')
require('dotenv').config()

// connect to db
const URL=process.env.MONGO_URL
mongoose.connect(URL).then(console.log('db is connected'))

const taskSchema=new mongoose.Schema({
    name:String,
    completed:Boolean
})

const task=mongoose.model('task',taskSchema)

module.exports=task