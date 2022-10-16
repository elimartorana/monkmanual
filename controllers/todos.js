const Todo = require('../models/Todo')
const PersonalGrowth = require('../models/PersonalGrowth')

module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            //const growthItems = await Todo.find({growth:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user,
            });
             
        }catch(err){
            console.log(err)
        }
    },
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
    // Testing PersonalGrowth
    getPersonalGrowth: async (req,res)=>{
        console.log(req.user)
        try{
            const PersonalGrowthItems = await PersonalGrowth.find({userId:req.user.id})
            const itemsLeft = await PersonalGrowth.countDocuments({userId:req.user.id,completed: false})
            res.render('todos.ejs', {PersonalGrowth: PersonalGrowthItems, left: itemsLeft, user: req.user,
            });
             
        }catch(err){
            console.log(err)
        }
    },
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
}    


