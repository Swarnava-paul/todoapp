document.getElementById("form").addEventListener("submit",todo);
let body=document.getElementById("table").getElementsByTagName("tbody")[0];

function todo(){
    event.preventDefault()
    let input=document.getElementById("task");
    let prio=document.getElementById("priority");
   let row= document.createElement("tr");
   let data1=document.createElement("td");
   let data2=document.createElement("td");
   data1.innerText=input.value;
   if(prio.value=="High"){
    data2.innerText=prio.value;
    data2.style.backgroundColor="red";
}
else if(prio.value=="Low"){
    data2.innerText=prio.value;
    data2.style.backgroundColor="green";
}
row.appendChild(data1);
row.appendChild(data2);
body.appendChild(row);
}