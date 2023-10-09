const express = require('express');

const taskController = require('./../controllers/taskController');
const authController = require('./../controllers/authController')
const router = express.Router();

router.route('/')
    .post(authController.protect, taskController.create)
    .get(authController.protect, taskController.getAllTask)

router.route('/:id')
    .get(taskController.getTaskById)
    .patch(taskController.updateTaskById)
    .delete(taskController.deleteTaskById);

module.exports = router;