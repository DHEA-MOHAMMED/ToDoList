document.addEventListener("DOMContentLoaded",function(){
    //make button disabled
        document.querySelector("#Add").disabled = true;
    //hold input text
        document.querySelector("#textadd").onkeyup =function(){

            if(document.querySelector("#textadd").value.length > 5){

                document.querySelector("#Add").disabled = false;
            }else{
                document.querySelector("#Add").disabled = true;

            }
}

        document.querySelector("form").onsubmit = function() {

            const text=document.querySelector("#textadd").value;
            const li=document.createElement("li");

            const trash =document.createElement("i");
            
            li.innerHTML = text;

            li.classList.add("list-group-item","h5","li");

            trash.classList.add("fa-solid" ,"fa-trash-can","trash","btn");

            trash.addEventListener('click', function handleClick(event) {
                document.querySelector("#ultodo").removeChild(li);
                
                                    });

            
            li.appendChild(trash);
            document.querySelector("#ultodo").appendChild(li);

        
            document.querySelector("#textadd").value =' ';
            document.querySelector("#Add").disabled = true;


            return false;
        }

    



})