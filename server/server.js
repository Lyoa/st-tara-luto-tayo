require('dotenv').config()

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const path = require('path')

const usersController = require('./controller/users')
const categoriesController = require('./controller/categories')
const recipesController = require('./controller/recipes')

const app = express()
const port = process.env.DB_PORT || 3000

app.use(express.static(path.join(__dirname, './ui/build/')))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.post('/api/v1/users', (req, res) => {
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

app.get('/api/v1/categories', (req, res) => {
    categoriesController.listCategories().then((data) => res.json(data))
})

app.post('/api/recipes', (req, res) => {
    recipesController
        .createRecipe(req.body.recipes)
        .then((data) => res.json(data))
})

app.get('/api/recipes/:id', (req, res) => {
    recipesController
        .getRecipeById(req.params.id)
        .then((data) => res.json(data))
})

app.get('/api/recipes', (req, res) => {
    recipesController.getAllRecipes().then((data) => res.json(data))
})

app.put('/api/recipes', (req, res) => {
    recipesController
        .updateRecipe(req.body.recipes)
        .then((data) => res.json(data))
})

app.delete('/api/recipes/:id', (req, res) => {
    recipesController.deleteRecipe(req.params.id).then((data) => res.json(data))
})

app.post('/api/categories', (req, res) => {
    categoriesController
        .createCategory(req.body.categories)
        .then((data) => res.json(data))
})

app.get('/api/categories/:id', (req, res) => {
    categoriesController
        .getCategoriesById(req.params.id)
        .then((data) => res.json(data))
})

app.get('/api/categories', (req, res) => {
    console.log(req.query)
    categoriesController
        .getAllCategories(req.query)
        .then((data) => res.json(data))
})

app.put('/api/categories', (req, res) => {
    categoriesController
        .updateCategory(req.body.category)
        .then((data) => res.json(data))
})

app.delete('/api/categories/:id', (req, res) => {
    categoriesController
        .deleteCategory(req.params.id)
        .then((data) => res.json(data))
})

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})
