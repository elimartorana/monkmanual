const deleteBtn = document.querySelectorAll('.del')

const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')

const PersonalGrowthItem = document.querySelectorAll('span.not')
const PersonalGrowthComplete = document.querySelectorAll('span.completed')

const RelationshipGrowthItem = document.querySelectorAll('span.not')
const RelationshipComplete = document.querySelectorAll('span.completed')

// Todos

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// PersonalGrowth

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deletePersonalGrowth)
})

async function deletePersonalGrowth(){
    const PersonalGrowthId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deletePersonalGrowth', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'PersonalGrowthIdFromJSFile': PersonalGrowthId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


// RelationshipGrowth

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteRelationshipGrowth)
})

async function deleteRelationshipGrowth(){
    const RelationshipGrowthId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteRelationshipGrowth', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'RelationshipGrowthIdFromJSFile': RelationshipGrowthId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

