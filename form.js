const form = document.querySelector(".form");
const elementContainer= document.querySelector(".element-container");
let user = "";

function newElement (name) {
 elementContainer.innerHTML = "";
 const elem = document.createElement("h1");
 elem.classList.add("notification");
 elem.innerText = "Pronto nos pondremos en contacto contigo, " + name + " gracias!";
 elementContainer.appendChild(elem);
}
form.addEventListener("submit",function(event){
    // Evitar que se recargue la página
    event.preventDefault(); 
    //    
    const name = form.userName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const message = form.message.value;

    if (name !== "" && lastName !== "" && email !== "" && message !== ""){
        const userObj={
            name,
            lastName,
            email,
            message,
        }
        console.log(userObj);
        user = name;
        newElement(user);
    } else {
        alert("Unfilled fields please complete");
    }
});
