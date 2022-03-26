const express=require('express')
const app=express()
const tasks=require('./routers/task')

const port= 10101

// meddlewar 
app.use(express.json())
app.use('/api/v1/tasks',tasks)
// api get all tasks
// api creat new task 
// api get task by id 
// api remove task by id 
// api update task by id 
// api get all tasks
app.get('/',(req,res)=>{
    res.send('hellow task manager api ')
})

app.listen(port,()=>console.log(`server is listen an port ${port}.....`))