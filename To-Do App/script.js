const input = document.querySelector('#input')
const addbtn = document.querySelector('#button')
const taskList = document.querySelector('.tasklist')


function addTask(){
    const newtask = document.createElement('li')
    newtask.textContent = input.value
    taskList.appendChild(newtask)
    input.value='';
}

function clearTask(){
     taskList.remove()
}