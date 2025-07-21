import express from "express";
import authMiddleware from "../middlewares/auth.js";
import {getTasks,createTask,getTasksbyId,updateTask,deleteTask} from '../controllers/taskController.js';
const taskRouter=express.Router();

taskRouter.route('/gp').get(authMiddleware,getTasks);
taskRouter.route('/gp').post(authMiddleware,createTask);

taskRouter.route('/:id/gp').get(authMiddleware,getTasksbyId);
taskRouter.route('/:id/gp').get(authMiddleware,updateTask);
taskRouter.route('/:id/gp').get(authMiddleware,deleteTask);
             
export default taskRouter;