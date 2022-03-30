const register = document.getElementById("register")
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const bd = document.getElementById("bd")
const email = document.getElementById("email")
const emailconf = document.getElementById("emailconf")
const pass = document.getElementById("pass")
const passconf = document.getElementById("passconf")

const fnameLabel = document.getElementById("labFname")
const lnameLabel = document.getElementById("labLname")
const emailLabel = document.getElementById("labEmail")
const emailconfLabel = document.getElementById("labEmailconf")
const passLabel = document.getElementById("labPass")
const passconfLabel = document.getElementById("labPassconf")

let namePatteren = /^[a-z]+$/gi;
let emailPattern = /\S+@\S+\.\S+/;
let passPattern = /[A-Z]{1,2}[a-zA-Z0-9]{6}/





register.addEventListener("click",function(e){
    e.preventDefault()
    let fullName = fname.value+lname.value;
    if(!fullName.match(namePatteren)){
        if(!fname.value.match(namePatteren)){
            fnameLabel.innerHTML = "First Name have a number or symbole"
        }
        if(!lname.value.match(namePatteren)){
            lnameLabel.innerHTML = "last Name have a number or symbole"
        } 
    }

    if(!email.value.match(emailPattern) && !emailconf.value.match(emailPattern) ){
       
        if(!email.value.match(emailPattern)){
            emailLabel.innerHTML="email fieled"
            
        }
        if(!emailconf.value.match(emailPattern)){
            emailconfLabel.innerHTML="email fieled"
        }

    }else{
        if(email.value!==emailconf.value){
            emailconfLabel.innerHTML="email does not match"
        }
    }

    if(!pass.value.match(passPattern && !passconf.value.match(passPattern))){
        if(!pass.value.match(passPattern)){
            passLabel.innerHTML = "password should have start with capital letter having at least two numbers at least one special character or symbol"
        }
        if(!passconf.value.match(passPattern)){
            passconfLabel.innerHTML = "password should have start with capital letter having at least two numbers at least one special character or symbol"
        }
    }else{
        if(pass.value!== passconf.value){
            passconfLabel.innerHTML = "Password does not match "    
        }
    }
    
})