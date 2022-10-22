const deleteBtn = document.querySelectorAll('.del')

const priorityItem = document.querySelectorAll('span.not')
const priorityComplete = document.querySelectorAll('span.completed')

const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')

const gratefulItem = document.querySelectorAll('span.not')
const gratefulComplete = document.querySelectorAll('span.completed')

const LookingForwardItem = document.querySelectorAll('span.not')
const LookingForwardComplete = document.querySelectorAll('span.completed')

// Priority

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deletePriority)
})

async function deletePriority(){
    const priorityId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deletePriority', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'priorityIdFromJSFile': priorityId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// Todo

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

// Grateful

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deletegrateful)
})

async function deletegrateful(){
    const gratefulId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deletegrateful', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'gratefulIdFromJSFile': gratefulId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


// LookingForward

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteLookingForward)
})

async function deleteLookingForward(){
    const LookingForwardId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteLookingForward', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'LookingForwardIdFromJSFile': LookingForwardId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

