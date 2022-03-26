const getAllTasks=(req,res)=>{
    res.send('get all tasks')
}

const creatNewTask=(req,res)=>{
    res.send('creat new task ')
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