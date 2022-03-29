const { default: mongoose } = require('mongoose')
const Task=require('../models/task')

const getAllTasks=async(req,res)=>{
    const tasks=await Task.find()
    res.json({tasks:tasks})
}

const getTaskById=async(req,res,next)=>{
    try{
        const task=await Task.findById(req.params.id)
        if(!task){
        // return res.status(404).json({error:`there is no task in this id ${req.params.id}`})
        return next({error:`there is no task in this id ${req.params.id}`})


        }
        res.status(200).json({task})
    }catch(error){
        // res.status(500).json({error})
        next(error)
        
    }
}

const creatNewTask=async(req,res,next)=>{
    try{
        const task =await Task({
            name:req.body.name,
            completed:req.body.completed
        })
        await task.save()
        res.json({task:task})
    }catch(error){
        // res.status(500).json({error})// the error message in error.message {in the object}
        next(error)

        
    }
}
const deleteTask=async(req,res,next)=>{
    try{
        const task=await Task.findByIdAndDelete(req.params.id)
        if(!task){
        // return res.status(404).json({error:`there is no task in this id ${req.params.id}`})
        return next({error:`there is no task in this id ${req.params.id}`})

        }
        // res.status(200).json({task})
        // res.status(200).send({task:null,status:'sucess'})
        res.status(200).json({task:null,status:'sucess'})
    }catch(error){
        // res.status(500).json({error})
        next(error)

    }
}
const updateTask=async(req,res,next)=>{
    try{
        const task=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!task){
        // return res.status(404).json({error:`there is no task in this id ${req.params.id}`})
        return next({error:`there is no task in this id ${req.params.id}`})

        }
        res.status(200).json({task})
        // res.status(200).json({task:null,status:'done the update'})
    }catch(error){
        // res.status(500).json({error})
        next(error)

    }
}

module.exports={
    getAllTasks,
    creatNewTask,
    deleteTask,
    updateTask,
    getTaskById,
}