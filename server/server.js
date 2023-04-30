require('dotenv').config()

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const path = require('path')

const usersController = require('./controller/users')
const categoriesController = require('./controller/categories')

const app = express()
const port = process.env.DB_PORT || 3000

app.use(express.static(path.join(__dirname, './ui/build/')))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.post('/api/v1/users', (req, res) => {
    console.log('test run express', req.body)
    usersController.createUser(req.body.users).then((data) => res.json(data))
})

app.get('/api/v1/users/:id', (req, res) => {
    usersController.getUsersById(req.params.id).then((data) => res.json(data))
})

app.get('/api/v1/users', (req, res) => {
    usersController.getAllUsers().then((data) => res.json(data))
})

app.put('/api/v1/users', (req, res) => {
    usersController.updateUser(req.body.users).then((data) => res.json(data))
})

app.delete('/api/v1/users/:id', (req, res) => {
    usersController.deleteUser(req.params.id).then((data) => res.json(data))
})

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})

app.get('/api/v1/categories', (req, res) => {
    categoriesController.listCategories().then((data) => res.json(data))
})
