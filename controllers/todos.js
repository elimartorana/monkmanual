const Priority = require('../models/Priority')
const Todo = require('../models/Todo')
const Grateful = require('../models/Grateful')
const LookingForward = require('../models/LookingForward')



module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const priorityItems = await Priority.find({userId:req.user.id})
            const todoItems = await Todo.find({userId:req.user.id})
            const gratefulItems = await Grateful.find({userId:req.user.id})
            const lookingForwardItems = await LookingForward.find({userId:req.user.id})
            
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            
            res.render('todos.ejs', {priorities: priorityItems, user: req.user, todos: todoItems, left: itemsLeft, user: req.user, gratefuls: gratefulItems, lookingforwards: lookingForwardItems, 
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
   
    // Priority

    createPriority: async (req, res)=>{
        try{
            await Priority.create({Priority: req.body.PriorityItem,
                   completed: false, userId: req.user.id})
            // add new props
            console.log('Priority has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    deletePriority: async (req, res)=>{
        console.log(req.body.PriorityIdFromJSFile)
        try{
            await Priority.findOneAndDelete({_id:req.body.priorityIdFromJSFile})
            console.log('Deleted Priority')
            res.json('Deleted it')
        }catch(err){
            console.log(err)
        }
    },

    // Todo

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
    
    // Grateful

    createGrateful: async (req, res)=>{
        try{
            await Grateful.create({Grateful: req.body.GratefulItem,
                   completed: false, userId: req.user.id})
            // add new props
            console.log('Grateful has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    deleteGrateful: async (req, res)=>{
        console.log(req.body.GratefulIdFromJSFile)
        try{
            await Grateful.findOneAndDelete({_id:req.body.GratefulIdFromJSFile})
            console.log('Deleted Grateful')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    
    // LookingForward

    createLookingForward: async (req, res)=>{
        try{
            await LookingForward.create({LookingForward: req.body.LookingForwardItem,
                   completed: false, userId: req.user.id})
            // add new props
            console.log('LookingForward has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    deleteLookingForward: async (req, res)=>{
        console.log(req.body.LookingForwardGrowthIdFromJSFile)
        try{
            await LookingForward.findOneAndDelete({_id:req.body.LookingForwardIdFromJSFile})
            console.log('Deleted LookingForward')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
}    


