const router=require('express').Router()
const {getAllTasks,creatNewTask,updateTask,deleteTask}=require('../controller/task')


router.route('/').get(getAllTasks).post(creatNewTask)
router.route('/:id').patch(updateTask).delete(deleteTask)


module.exports=router