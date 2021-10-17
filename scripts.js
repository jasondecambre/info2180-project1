/* Add your JavaScript to this file */
window.onload = function(){
    var input = document.getElementsByTagName("input")[0];
    var button = document.getElementsByTagName("button")[0];
    var message = document.getElementsByClassName("message")[0];
    button.addEventListener("click", function(event){
        event.preventDefault();
        if((input.value === "")||(input.value.indexOf("@") === -1) || (input.value.indexOf(".") === -1)){
            message.innerHTML = "Please enter a valid email address.";
        }
        else{
            message.innerHTML = "Thank you! Your email address " + input.textContent + " has ben added to our mailing list!";
        }
    });

}

//