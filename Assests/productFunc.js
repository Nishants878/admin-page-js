const dataFromBackendForProduct= fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products').then(
    res=>{
       res.json().then(
           
           data=>{
            
               console.log(data)
               
               if(data.length > 0){
               
                var temp = ""

                //---start of loop
                 
                data.forEach(value => {
                    className=""
                    if(value.stock>100){
                         className = `inStock`
                    }
                    else{
                        className = `outStock`
                    }
                    if(Date.parse(value.expiryDate)<  Date.now()){
                        
                        className = `${className} notExpired`
                   }
                   else{
                    className = `${className} expired`

                   }
                //    console.log(className)
                    // if (q>100){
                    //     c1="low"
                    // }
                    // if (q>10){
                    //     c1=c1+" " + "exp"    
                    // }
                    temp +=`<tr class="${className}">`;
                    temp +="<td>"+value.id+"</td>";
                    temp +="<td>"+value.medicineName+"</td>";
                    
                    temp +="<td>"+value.medicineBrand+"</td>";
                    temp +="<td>"+value.expiryDate+"</td>";
                    temp +="<td>"+"$"+value.unitPrice+"</td>";
                    temp +="<td>"+value.stock+"</td>";

                });


                //---loop closed
               var toShowData= document.getElementById("data-product");
               toShowData.innerHTML = temp;


               }
           }
       )
    }
)




$(function () {
    $("#expired").click(function () {
        if ($(this).is(":checked")) {
           
            $(".expired").hide();
        } else {
            $(".expired").show();
        }
    });
});


$(function () {
    $("#low").click(function () {
        if ($(this).is(":checked")) {
            
            $(".inStock").hide();
        } else {
            $(".inStock").show();
        }
    });
});