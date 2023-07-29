const form = document.querySelector("form")

function checkToken() {
    if(localStorage.getItem("token") != null){
        window.location.href = "./profilePage.html";
    }
}

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const cnfpassword = form.cnfpassword.value;

    console.log(username, email);
    const validate = required(username, email, password, cnfpassword);
    if(validate){
        var token = generateToken(16);

        //local storage vars
        localStorage.username = username;
        localStorage.email = email;
        localStorage.token = token;
        localStorage.password = password;
        console.log(token);
        window.location.href = "./profilePage.html";
    }
    else{
        var f = document.getElementById("myForm").elements;
        f["password"].value = "";
        f["cnfpassword"].value = "";
    }
})

//validate input fields and password matching
function required(username, email, password, cnfpassword){
    if(username.length == 0 || email.length == 0 || password.length == 0 || cnfpassword == 0){
        document.getElementById("alert-msg").style.display = "contents";
        //alert("hello");
        return false;
    }
    else{
        if(password != cnfpassword){
            alert("Password didn't match : " + password + " "+ cnfpassword);
            return false;
        }
        else{
            return true;
        }
    }
}

// Generate profile token 
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateToken(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

window.tabs.reload();
