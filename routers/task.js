const router=require('express').Router()
const {getAllTasks,getTaskById,creatNewTask,updateTask,deleteTask}=require('../controller/task')


router.route('/').get(getAllTasks).post(creatNewTask)
router.route('/:id').get(getTaskById).patch(updateTask).delete(deleteTask)


module.exports=router