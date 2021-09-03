//export const projectList = [];
const todos = (title, desc, dueDate, priority) => ({
    title,
    desc,
    dueDate,
    priority
});
/*
title=document.getElementById("title");
desc = document.getElementById("desc");
dueDate = document.getElementById("duedate");
priority = document.getElementById("prio");

function submit(){
    if(title == "" && desc == "" && dueDate == "" && priority == ""){
        alert("Please Enter All the Fields")

    }
    else{
        projectList.appendChild(title);
        projectList.appendChild(desc);
        projectList.appendChild(dueDate);
        projectList.appendChild(priority);
    }
}


document.getElementById("sub").addEventListener('click', function(){
    submit();

})
*/
let l = document.querySelector("ul");
var list = document.getElementsByTagName("LI");
for(let i=0; i < list.length ; i++){
    var span = document.createElement("span");
    var txt = document.createTextNode("Edit")
    span.className="edit";
    span.appendChild(txt);
    list[i].appendChild(span);
}

