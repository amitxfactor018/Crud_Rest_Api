const express = require('express')
const app = express()

// Routes
app.get('/', (req, res) =>{
    res.send('Hello Api');
})

app.listen(3000, () =>{
    console.log('Running on port 3000');
})