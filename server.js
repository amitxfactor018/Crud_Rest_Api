const express = require('express')
const mongoose = require('mongoose')
const Course = require('./courseschema')

const app = express()

app.use(express.json())
// Routes
app.get('/', (req, res) =>{
    res.send('Hello Api');
})


// Add data
app.post('/Course', async(req, res) => {
    try {
        const course = await Course.create(req.body)
        res.status(200).json(course);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// Get the data
// All data at once
app.get('/Course', async(req, res) => {
    try {
        const course = await Course.find({});
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
//Data by id
app.get('/Course/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const course = await Course.findById(id);
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Update data by id
// update a product
app.put('/Course/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const course = await Course.findByIdAndUpdate(id, req.body);
        // we cannot find any course in database
        if(!course){
            return res.status(404).json({message: `cannot find any Course with ID ${id}`})
        }
        const updatedcourse = await Course.findById(id);
        res.status(200).json(updatedcourse);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a product

app.delete('/Course/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const course = await Course.findByIdAndDelete(id);
        // If course does not exist
        if(!course){
            return res.status(404).json({message: `cannot find any course with ID ${id}`})
        }
        res.status(200).json(course);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


mongoose.
connect('mongodb+srv://amitxfactor018:12345678Amit@restamitapi.eubnx1t.mongodb.net/Courses?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log(`App is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})