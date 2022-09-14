const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const hostname = 'localhost'

//GET: http://localhost:5000/
app.get('/',(req,res)=>{
    // res.send('<h1>Express App</h1><hr color="red" />')
    res.status(200).send({"message":"Hello"})
})

//GET: http://localhost:5000/contact
app.get('/contact',(req,res)=>{
    // res.send('<h1>Contact Page</h1><hr color="red" />')
    res.status(200).send({"message":"Contact"})
})

app.listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}`)
})