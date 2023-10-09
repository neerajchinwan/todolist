const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    creatorId: {
        type: String,
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;