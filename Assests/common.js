var getStorage =JSON.parse(localStorage.getItem("loginCredentials"))
var page = window.location.pathname.split("/")[1]

if (page=="login.html"){

}
else{
    if(getStorage===null){
    {window.location.href="./login.html"}
    }
    else{
        if(page==="products.html"){
            var a=    document.getElementsByClassName("topbar-menu-items");
            for(i=0;i<a.length;i++){
                if(i===1){
                   a[i].className ="topbar-menu-items topbar-active"
                }
                else{a[i].className ="topbar-menu-items"}
                
            }
           }
           
           if(page==="orders.html"){
               var a=    document.getElementsByClassName("topbar-menu-items");
               for(i=0;i<a.length;i++){
                   if(i===0){
                      a[i].className ="topbar-menu-items topbar-active"
                   }
                   else{a[i].className ="topbar-menu-items"}
                   
               }
              }
           
              if(page==="users.html"){
               var a=    document.getElementsByClassName("topbar-menu-items");
               for(i=0;i<a.length;i++){
                   if(i===2){
                      a[i].className ="topbar-menu-items topbar-active"
                   }
                   else{a[i].className ="topbar-menu-items"}
                   
               }
              }

    }
}


var lgt=document.getElementById("logout")
lgt.addEventListener("click", ()=>{
    localStorage.removeItem("loginCredentials");
    window.location.href="./login.html"
})











