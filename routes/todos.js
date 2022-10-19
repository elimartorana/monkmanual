const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos') 



const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

//  PersonalGrowth

router.post('/createPersonalGrowth', todosController.createPersonalGrowth)

router.delete('/deletePersonalGrowth', todosController.deletePersonalGrowth)

//  RelationshipGrowth

router.post('/createRelationshipGrowth', todosController.createRelationshipGrowth)

router.delete('/deleteRelationshipGrowth', todosController.deleteRelationshipGrowth)

module.exports = router