
function addBudget(){

const b={
category:budgetCategory.value,
amount:Number(budgetAmount.value)
}

const data=getData("budgets");
data.push(b);
saveData("budgets",data);

loadBudgets();
}

function loadBudgets(){

const list=document.getElementById("budgetList");
list.innerHTML="";

getData("budgets").forEach(b=>{

const div=document.createElement("div");
div.className="card";
div.innerHTML=`${b.category} Budget: $${b.amount}`;

list.appendChild(div);

});

}

loadBudgets();
