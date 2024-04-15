const todoText=document.querySelector("#todoText");
const addBtn=document.querySelector("#addBtn");
const todoList=document.querySelector("#todoList");

addBtn.addEventListener("click",()=>{
   
    const li=document.createElement("li");
    li.textContent=todoText.value;
    todoList.append(li);
    todoText.value="";
});


