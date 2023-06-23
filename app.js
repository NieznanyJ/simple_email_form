const mainContainer = document.querySelector(".main-container");
const inputForm = document.querySelector(".input-form");
const inputEmail = document.querySelector(".email-inp");
const popup = document.querySelector(".popup-container");
const popupBtn = document.querySelector(".popup-btn");
const errorMsg = document.querySelector(".error-lbl");
const userEmail = document.querySelector(".user-email");


const validateEmail = (email) =>{
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    return emailRegex.test(email);

}


inputEmail.addEventListener("input", ()=>{
            errorMsg.classList.add("hidden");
            inputEmail.classList.remove("invalid");
        
});

inputForm.addEventListener("submit", (e) => {

    if(validateEmail(inputEmail.value)){
        popup.classList.remove("hidden");
        mainContainer.classList.add("hidden");
        userEmail.textContent = inputEmail.value;
        e.preventDefault();
    }
    else{
        inputEmail.classList.add("invalid");
        errorMsg.classList.remove("hidden");
        e.preventDefault();
        
    }
});

popupBtn.addEventListener("click", ()=>{
    popup.classList.add("hidden");
    mainContainer.classList.remove("hidden");
    userEmail.textContent = "";
    location.href = "index.html";
});







