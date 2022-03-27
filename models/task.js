const mongoose=require('mongoose')

// connect to db
const URL='mongodb+srv://abdoAli:1072000@cluster0.mikwk.mongodb.net/task_manager_api_freecodecamp?retryWrites=true&w=majority'
mongoose.connect(URL).then(console.log('db is connected'))

const taskSchema=new mongoose.Schema({
    name:String,
    completed:Boolean
})

const task=mongoose.model('task',taskSchema)

module.exports=task