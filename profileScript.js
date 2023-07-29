
function viewProfile() {
    if(localStorage.getItem("token") === null){
        window.location.href = "./index.html";
    }
    
    document.getElementsByTagName("BODY")[0].style.background = "linear-gradient(25deg, #5bf7db 0 50%, #F8FAF5 50% 100%)";
    var profile = document.getElementById("profile-details");

    profile.innerHTML = 
    `<div>Full Name : ${localStorage.username}</div>
    <div>Email : ${localStorage.email}</div>
    <div>Token : ${localStorage.token}</div>
    <div>Password : ${localStorage.password}</div>`
}

function removeToken() {
    localStorage.removeItem("token");
    alert("done");
    window.location.href = "./index.html";
}

window.tabs.reload();
