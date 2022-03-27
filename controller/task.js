const Task=require('../models/task')

const getAllTasks=(req,res)=>{
    res.send('get all tasks')
}

const creatNewTask=async(req,res)=>{
    const task =await Task({
        name:req.body.name,
        completed:req.body.completed
    })
    res.json({task:task})
}
const deleteTask=(req,res)=>{
    res.send('delete task')
}
const updateTask=(req,res)=>{
    res.send('update task')
}

module.exports={
    getAllTasks,
    creatNewTask,
    deleteTask,
    updateTask,
}