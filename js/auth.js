
function login(){
const user=document.getElementById("username").value;
localStorage.setItem("user",user);
window.location="pages/dashboard.html";
}
