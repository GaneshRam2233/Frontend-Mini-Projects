
let new_task = document.getElementById("enter") // input new task
let add = document.getElementById("addBtn") // add button 
let content = document.querySelector(".content") // content box to insert tasks

let storage_length = localStorage.length
let tasks = localStorage.key(storage_length - 1)
if (tasks != null) {
    let task = document.createElement("div")
    task.classList.add("task")
    // task.style.border="1px solid black"
    let p = document.createElement("p")
    p.classList.add("taskPara")
    p.innerText = localStorage.getItem(tasks)
    let btns = document.createElement("div")
    btns.classList.add("btns")
    btns.innerHTML = "<button id=delBtn>Delete</button> <button id=editBtn>Edit</button>"
    task.append(p)
    task.append(btns)
    content.append(task)
}

var t = 0
add.addEventListener("click", () => {
    let task_value = new_task.value.trim()
    if (task_value !== "") {

        t++
        localStorage.setItem("task" + t, task_value)

        let task = document.createElement("div")
        task.classList.add("task")
        // task.style.border="1px solid black"
        let p = document.createElement("p")
        p.classList.add("taskPara")
        p.innerText = localStorage.getItem("task" + t)
        // console.log(Text)
        let btns = document.createElement("div")
        btns.classList.add("btns")
        btns.innerHTML = "<button id=delBtn>Delete</button> <button id=editBtn>Edit</button>"
        task.append(p)
        task.append(btns)
        content.append(task)
        new_task.value=""
    }
})

// function display(){
//     localStorage
// }