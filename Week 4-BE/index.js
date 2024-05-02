// Express Server for 3 endpoints
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.json('Hello World!')
})

app.get('/string', (req, res) => {
    res.send(
        "Jonah Uka is my name."
    )
})

app.get('/object', (req, res) => {
    res.send(
        {
            name: "Jonah Uka",
            country: "Nigeria",
            hobby: "Coding",
            Favorite_tools: "AWS, Azure, Terraform, Ansible, Postman and Python"
        }
    )

})

app.get('/array', (req, res) => {
    res.send(
        [
            "Jonah Uka",
            "Nigeria",
            "Coding",
            "AWS, Azure, Terraform, Ansible, Postman and Python"
        ]
    )
})