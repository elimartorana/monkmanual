const Todo = require('../models/Todo')
const PersonalGrowth = require('../models/PersonalGrowth')
const RelationshipGrowth = require('../models/RelationshipGrowth')



module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            const personalGrowthItems = await PersonalGrowth.find({userId:req.user.id})
            const relationshipGrowthItems = await RelationshipGrowth.find({userId:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user, personalgrowths: personalGrowthItems, relationshipgrowths: relationshipGrowthItems
            });
             
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
   
    // Todos

    createTodo: async (req, res)=>{
        try{
            await Todo.create({todo: req.body.todoItem,
                   completed: false, userId: req.user.id})
            // add new props
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    
    // PersonalGrowth

    createPersonalGrowth: async (req, res)=>{
        try{
            await PersonalGrowth.create({PersonalGrowth: req.body.PersonalGrowthItem,
                   completed: false, userId: req.user.id})
            // add new props
            console.log('PersonalGrowth has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    deletePersonalGrowth: async (req, res)=>{
        console.log(req.body.PersonalGrowthIdFromJSFile)
        try{
            await PersonalGrowth.findOneAndDelete({_id:req.body.PersonalGrowthIdFromJSFile})
            console.log('Deleted PersonalGrowth')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    
    // RelationshipGrowth

    createRelationshipGrowth: async (req, res)=>{
        try{
            await RelationshipGrowth.create({RelationshipGrowth: req.body.RelationshipGrowthItem,
                   completed: false, userId: req.user.id})
            // add new props
            console.log('RelationshipGrowth has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    deleteRelationshipGrowth: async (req, res)=>{
        console.log(req.body.RelationshipGrowthIdFromJSFile)
        try{
            await RelationshipGrowth.findOneAndDelete({_id:req.body.RelationshipGrowthIdFromJSFile})
            console.log('Deleted RelationshipGrowth')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
}    


