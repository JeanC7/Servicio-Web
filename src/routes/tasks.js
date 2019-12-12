import {Router} from 'express';
const router = Router();
import {createTask,getTasks, deleteTask, updateTask, getOneTask,getTasksByProject} from '../controllers/task.controller'
// api/tasks/
router.post('/',createTask);
router.get('/',getTasks);

// api/task/id
router.delete('/:id',deleteTask);
router.put('/:id',updateTask);
router.get('/:id',getOneTask);
//api/tasks/project/;projectid
router.get('/project/:projectid',getTasksByProject);
export default router;
