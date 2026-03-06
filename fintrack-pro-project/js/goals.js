
function addGoal(){

const g={
name:goalName.value,
target:Number(goalAmount.value),
saved:0
}

const data=getData("goals");
data.push(g);
saveData("goals",data);

loadGoals();
}

function loadGoals(){

const list=document.getElementById("goalList");
list.innerHTML="";

getData("goals").forEach(g=>{

const div=document.createElement("div");
div.className="card";

div.innerHTML=`
<h3>${g.name}</h3>
<p>$${g.saved} / $${g.target}</p>
<progress value="${g.saved}" max="${g.target}"></progress>
`;

list.appendChild(div);

});

}

loadGoals();
