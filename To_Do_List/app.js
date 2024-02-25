const input = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')
const error = document.querySelector('.error')

function addTask(){
  if(input.value === ''){
    error.innerHTML = "Something Went Wrong 🙄";
    error.style.color = "red";
    error.style.display = "block";
    setTimeout(()=>{
      error.style.display = "none";
    },2000)
  }
  else{
    error.innerHTML = "Task Added 😊"
    error.style.color = "Orange"
    error.style.display = "block";
    setTimeout(()=>{
      error.style.display = "none";
    },2000)
    let li = document.createElement('li');
    li.innerHTML = input.value;  
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData()
 }
  input.value = '';
  saveData()
}


listContainer.addEventListener('click' , (e)=>{
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    if(e.target.className === "checked"){
    error.innerHTML = "Task Completed 🎉😎"
    error.style.color = "green"
    error.style.display = "block";
    setTimeout(()=>{
      error.style.display = "none";
    },2000)}
    saveData()
  }
  else if(e.target.tagName === "SPAN"){
    error.innerHTML = "Task Removed 😏"
    error.style.color = "blue"
    error.style.display = "block";
    setTimeout(()=>{
      error.style.display = "none";
    },2000)
    e.target.parentElement.remove();
    saveData()
  }
},false)

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask()

