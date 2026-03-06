
const tx=getData("transactions");

const categories={};

tx.forEach(t=>{
if(!categories[t.category]) categories[t.category]=0;
categories[t.category]+=t.amount;
});

new Chart(document.getElementById("categoryChart"),{
type:"pie",
data:{
labels:Object.keys(categories),
datasets:[{data:Object.values(categories)}]
}
});
