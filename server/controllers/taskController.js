const Task = require('./../models/taskModel');

exports.create = async (request, response) => {
    try{
        request.body.creatorId = request.user._id;
        const newTask = await Task.create(request.body);

        response.status(201)
                .json({
                    status: 'success',
                    data: {
                        newTask
                    }
                })
    }catch(error){
        response.status(404)
                .json({
                    status: 'fail',
                    message: error.message
                })
    }
}

exports.getAllTask = async (request, response) => {
    try{
        const allTask = await Task.find({creatorId: request.user._id});

        response.status(200)
                .json({
                    status: 'success',
                    data: {
                        allTask
                    }
                })
    }catch(error){
        response.status(404)
                .json({
                    status: 'fail',
                    message: error.message
                })
    }
}

exports.getTaskById = async (request, response) => {
    try{
        const id = request.params.id;

        const task = await Task.findById(id);

        if(!task){
            return response.status(400)
                            .json({
                                status: 'fail',
                                message: 'No task is found wiht this id'
                            })
        }

        response.status(200)
                .json({
                    status: 'success',
                    data: {
                        task
                    }
                })
    }catch(error){
        response.status(404)
                .json({
                    status: 'fail',
                    message: error.message
                })
    }
}

exports.updateTaskById = async (request, response) => {
    try{
        const id = request.params.id;

        const updatedTask = await Task.findByIdAndUpdate(id, request.body, {new: true})

        if(!updatedTask){
            return response.status(400)
                            .json({
                                status: 'fail',
                                message: 'Invalid Id'
                            })
        }
        response.status(200)
                .json({
                    status: 'success',
                    data: {
                        updatedTask
                    }
                })
    }catch(error){
        response.status(404)
                .json({
                    status: 'fail',
                    message: error.message
                })
    }
}

exports.deleteTaskById = async (request, response) => {
    try{
        const id = request.params.id;

        const deleteTask = await Task.findByIdAndDelete(id);

        response.status(200)
                .json({
                    status: 'success',
                    data: {
                        deleteTask: []
                    }
                })
    }catch(error){
        response.staus(404)
                .json({
                    status: 'fail',
                    message: error.message
                })
    }
}