




var submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    var username = document.getElementById("use").value
    var password = document.getElementById("pass").value
    if(username === password){
      
        var localData = {
            username:username,
            password:password
        }
        localStorage.setItem("loginCredentials", JSON.stringify(localData));
        alert("logged")
        window.location.href="./orders.html"
        
    }else{
        alert("username and password should be same")
    }

})