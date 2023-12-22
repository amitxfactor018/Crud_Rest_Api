const express = require('express')
const mongoose = require('mongoose')
const tasks = require('./taskschema')
const app = express()
require('dotenv').config()

app.use(express.json())
// Routes
app.get('/', (req, res) =>{
    res.send('Hello Api');
})


// Add task
app.post('/tasks', async(req, res) => {
    try {
        const task = await tasks.create(req.body)
        res.status(200).json(task);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// Get all the tasks
// All tasks at once
app.get('/tasks', async(req, res) => {
    try {
        const task = await tasks.find({});
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
//Tasks by id
app.get('/tasks/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const task = await tasks.findById(id);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Update Tasks by id
app.put('/tasks/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const task = await tasks.findByIdAndUpdate(id, req.body);
        // we cannot find such task in database
        if(!task){
            return res.status(404).json({message: `cannot find any Task with ID ${id}`})
        }
        const updatedtask = await tasks.findById(id);
        res.status(200).json(updatedtask);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a task

app.delete('/tasks/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const task = await tasks.findByIdAndDelete(id);
        // If task does not exist
        if(!task){
            return res.status(404).json({message: `cannot find any task with ID ${id}`})
        }
        res.status(200).json(task);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


mongoose.connect(process.env.MONGODBURL)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log(`App is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})