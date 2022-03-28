const { default: mongoose } = require('mongoose')
const Task=require('../models/task')

const getAllTasks=async(req,res)=>{
    const tasks=await Task.find()
    res.json({tasks:tasks})
}

const getTaskById=async(req,res)=>{
    try{
        const task=await Task.findById(req.params.id)
        res.status(201).json({task})
    }catch(error){
        res.status(500).json({error})
        
    }
}

const creatNewTask=async(req,res)=>{
    try{
        const task =await Task({
            name:req.body.name,
            completed:req.body.completed
        })
        await task.save()
        res.json({task:task})
    }catch(error){
        res.status(500).json({error})// the error message in error.message {in the object}
        
    }
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
    getTaskById,
}