'use strict';

let state = {
 taskList: [],
  inputtedText: ''
};


function createTaskItemElement(task){
  let list = document.createElement("li");
if(task.complete==true){
  list.classList.add('font-strike');
}
list.textContent = task.description;
list.addEventListener("Click",function(){
  list.classList.toggle('font-strike');
});
return list;
}







function renderTaskList(){
  let ol =document.querySelector('ol');
  ol.textContent ="";
  for(var i=0;i<state.taskList.length;i++){
    let li = createTaskItemElement(state.taskList[i]);
    ol.appendChild(li);
  } 
}


renderTaskList();



function addNewTask(){
  let task ={id:state.taskList.length+1, description:state.inputtedText, complete:false};
  state.taskList.push(task);
  state.inputtedText="";
  input.value = '';
  renderTaskList();
}



let input = document.querySelector('input');
input.addEventListener("input", function(){
  state.inputtedText = input.value;
  renderInput();
})


let addtask = document.querySelector('#add-task');
addtask.addEventListener("click", function(){
  addNewTask();
})

function renderInput(){
  document.querySelector('input').textContent = state.inputtedText;
  if(state.inputtedText==""){
    let button =document.querySelector('button');
    button.disabled = true;
  }
}




