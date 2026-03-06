
const transactions=getData("transactions");

let income=0;
let expenses=0;

transactions.forEach(t=>{
if(t.type==="income") income+=t.amount;
else expenses+=t.amount;
});

const balance=income-expenses;

document.getElementById("income").innerText="$"+income;
document.getElementById("expenses").innerText="$"+expenses;
document.getElementById("balance").innerText="$"+balance;
document.getElementById("savings").innerText="$"+Math.max(balance*0.2,0);

new Chart(document.getElementById("financeChart"),{
type:"bar",
data:{
labels:["Income","Expenses"],
datasets:[{data:[income,expenses]}]
}
});
