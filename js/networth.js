
function addAsset(){

const data=getData("assets");
data.push({name:assetName.value,value:Number(assetValue.value)});
saveData("assets",data);

calc();
}

function addDebt(){

const data=getData("debts");
data.push({name:debtName.value,value:Number(debtValue.value)});
saveData("debts",data);

calc();
}

function calc(){

let assets=0;
let debts=0;

getData("assets").forEach(a=>assets+=a.value);
getData("debts").forEach(d=>debts+=d.value);

document.getElementById("networthResult").innerHTML=`
<h2>Total Net Worth</h2>
<p>Assets: $${assets}</p>
<p>Liabilities: $${debts}</p>
<h3>$${assets-debts}</h3>
`;
}

calc();
