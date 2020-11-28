

const dataFromBackend= fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders').then(
    res=>{
       res.json().then(
           
           data=>{
            
            //    console.log(data)
               
               if(data.length > 0){
               
                var temp = ""

                //---start of loop
                 
                data.forEach(value => {
                    // if (q>100){
                    //     c1="low"
                    // }
                    // if (q>10){
                    //     c1=c1+" " + "exp"
                    // }
                    temp +="<tr class="+value.orderStatus+">";
                    temp +="<td>"+value.id+"</td>";
                    temp +="<td>"+value.customerName+"</td>";
                    
                    temp +="<td>"+value.orderDate+"<br>"+"<span>"+value.orderTime+"<span>"+"</td>";
                    temp +="<td>"+"$"+value.amount+"</td>";
                    temp +="<td>"+value.orderStatus+"</td>";

                });


                //---loop closed
               var toShowData= document.getElementById("data");
               toShowData.innerHTML = temp;


               }
           }
       )
    }
)











//---New toggling

$(function () {
    $("#new-one").click(function () {
        if ($(this).is(":checked")) {
            $(".New").show();
        } else {
            $(".New").hide();
        }
    });
});


//---packed toggling
$(function () {
    $("#packed-one").click(function () {
        if ($(this).is(":checked")) {
            $(".Packed").show();
        } else {
            $(".Packed").hide();
        }
    });
});





$(function () {
    $("#transit-one").click(function () {
        if ($(this).is(":checked")) {
            $(".InTransit").show();
        } else {
            $(".InTransit").hide();
        }
    });
});

//---Delivered toggling

$(function () {
    $("#delivered-one").click(function () {
        if ($(this).is(":checked")) {
            $(".Delivered").show();
        } else {
            $(".Delivered").hide();
        }
    });
});
   



