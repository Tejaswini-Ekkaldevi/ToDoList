//import { projectList } from "./main";
var list = document.getElementsByTagName("LI");
for(let i=0; i < list.length ; i++){
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7")
    span.className="close";
    span.appendChild(txt);
    list[i].appendChild(span);
}


let close = document.getElementsByClassName("close");
for(let i=0;i< close.length; i++){
    close[i].onclick = function(){
        var c = this.parentElement;
        c.style.display = "none";

    }
}

var ulist = document.querySelector("ul");
ulist.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
}, false)
/*
function display(){
    let todo;
   const row = document.createElement('tr')
   const title = document.createElement('td')
   const desc = document.createElement('td')
   const dueDate = document.createElement('td')
   const prio = document.createElement('td')


   title.innerHTML = todo.title
   desc.innerHTML = todo.desc
   dueDate.innerHTML = todo.dueDate
   prio.innerHTML = todo.prio

   row.appendChild(title)
   row.appendChild(desc)
   row.appendChild(dueDate)
   row.appendChild(prio)
   projectList.appendChild(row);
}

let s = document.querySelector("li");
s.addEventListener('click', function(){
    <html>
        <body>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>DueDate</th>
                    <th>Priority</th>
                </tr>
            </table>
        </body>
    </html>
    display();
})
*/
function addProject(){
    let li = document.createElement("li");
    let input = document.getElementById("input1").value;
    var txt1 = document.createTextNode(input);
    li.appendChild(txt1);

    if(input === ''){
        alert("You must write something");
    }
    else{
        document.getElementById("ul1").appendChild(li);
    }
    document.getElementById("input1").value= "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for(let i=0;i< close.length; i++){
        close[i].onclick = function(){
            var c = this.parentElement;
            c.style.display = "none";
        }
    }
}


function removeAll(){
    let rlist = document.getElementsByTagName("ul");
    rlist[0].innerHTML = "";
}




