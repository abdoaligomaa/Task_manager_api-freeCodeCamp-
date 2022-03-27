const { default: mongoose } = require('mongoose')
const Task=require('../models/task')

const getAllTasks=async(req,res)=>{
    const tasks=await Task.find()
    res.json({tasks:tasks})
}

const creatNewTask=async(req,res)=>{
    const task =await Task({
        name:req.body.name,
        completed:req.body.completed
    })
    await task.save()
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