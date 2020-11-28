const dataFromBackendForUser= fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users').then(
    res=>{
       res.json().then(
           
           data=>{
            
               console.log(data)
               
               if(data.length > 0){
               
                var temp = ""

                //---start of loop
                 
                data.forEach(value => {
                   
                
                    temp +="<tr class="+"table-row"+">";
                    temp +="<td>"+value.id+"</td>";
                    temp +="<td>"+"<img src="+value.profilePic+">"+"</td>";
                    
                    temp +="<td>"+value.fullName+"</td>";
                    temp +="<td>"+value.dob+"</td>";
                    temp +="<td>"+value.gender+"</td>";
                    temp +="<td>"+value.currentCity+","+value.currentCountry+"</td>";

                });


                //---loop closed
               var toShowData= document.getElementById("data-user");
               toShowData.innerHTML = temp;


               }
           }
       )
    }
)



