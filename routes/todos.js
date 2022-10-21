const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')
const { ensureAuth } = require('../middleware/auth')

//  Todo

router.get('/', ensureAuth, todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

//  Priority

router.post('/createPriority', todosController.createPriority)

router.delete('/deletePriority', todosController.deletePriority)

//  PersonalGrowth

router.post('/createPersonalGrowth', todosController.createPersonalGrowth)

router.delete('/deletePersonalGrowth', todosController.deletePersonalGrowth)

//  LookingForward

router.post('/createLookingForward', todosController.createLookingForward)

router.delete('/deleteLookingForward', todosController.deleteLookingForward)

module.exports = router