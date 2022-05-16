import { Router } from "express";

import * as TaskController from '../controllers/task.controller';

const router = Router();

router.get('/tasks', TaskController.allTasks);
router.post('/tasks', TaskController.addTaks);
router.put('/task/:id', TaskController.updateTask);
router.delete('task/:id', TaskController.deleteTask);

export default router;