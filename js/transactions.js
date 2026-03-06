
function addTransaction(){

const t={
amount:Number(amount.value),
category:category.value,
type:type.value,
date:date.value,
description:description.value
}

const data=getData("transactions");
data.push(t);
saveData("transactions",data);

loadTransactions();
}

function loadTransactions(){

const list=document.getElementById("transactionList");
if(!list) return;

list.innerHTML="";

getData("transactions").forEach(t=>{

const div=document.createElement("div");
div.className="card";
div.innerHTML=`${t.type.toUpperCase()} - $${t.amount} (${t.category})`;

list.appendChild(div);

});

}

loadTransactions();
