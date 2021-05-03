class ContactForm{
    name:string;
    email:string;
    phone:number;
    am:boolean;
    pm:boolean;
    preferedContact:string;
}


window.onload = function(){
    //submit button
    let submitBtn = getInputById("submit-button");
    submitBtn.onclick = submit;

}

function submit(){
    clearAll();
    clearDisplay();
    //check if valid
    if(isValid() == true){
        //get data
        let input:ContactForm = getContactForm();
        displayInput(input);
        //popup
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }
    else{
        clearDisplay();
    }
}

function isValid():boolean{

    let valid = true;
    let errorSummary = getInputById("error-summary");

    let name = getInputById("name").value;
    if(name == ""){
        valid = false;

        let errorName  = document.createElement("p");
        errorName.innerText = `A Name is required!`;
        errorSummary.appendChild(errorName);
    }
    
    let email = getInputById("email").value;
    if(email == ""){
        valid = false;

        let errorEmail  = document.createElement("p");
        errorEmail.innerText = `An Email is required!`;
        errorSummary.appendChild(errorEmail);
    }
    
    let phone = parseInt(getInputById("phone").value);
    if(isNaN(phone)){
        valid = false;

        let errorPhone  = document.createElement("p");
        errorPhone.innerText = `An Phone Number is required!`;
        errorSummary.appendChild(errorPhone);
    }

    let am = getInputById("time-am").checked;
    let pm = getInputById("time-pm").checked;
    if(am == false && pm == false){
        valid = false;

        let errorTime  = document.createElement("p");
        errorTime.innerText = `Pick Am or Pm!`;
        errorSummary.appendChild(errorTime);
    }

    let contact = (<HTMLSelectElement>document.getElementById("contact-type")).value;
    if(contact == "Choose one"){
        valid = false;

        let errorContact  = document.createElement("p");
        errorContact.innerText = `Pick a Preferred Contact!`;
        errorSummary.appendChild(errorContact);
    }
    return valid;
}

function displayInput(userInput:ContactForm):void{
    //TO DO clear first input before displaying new one
    let displayDiv = getInputById("myPopup");

    let customerName  = document.createElement("p");
    customerName.innerText = `Name: ${userInput.name}`;

    let customerEmail  = document.createElement("p");
    customerEmail.innerText = `Email: ${userInput.email}`;

    let customerPhone  = document.createElement("p");
    customerPhone.innerText = `Phone: ${userInput.phone}`;

    //choice of am pm
    let customerTime = document.createElement("p");
    let time = "pm";
    if(userInput.am){
        time = "am";
    }
    customerTime.innerText = `Contact time: ${time}`;

    let customerContact  = document.createElement("p");
    customerContact.innerText = `Choice of contact: ${userInput.preferedContact}`;

    displayDiv.appendChild(customerName);
    displayDiv.appendChild(customerEmail);
    displayDiv.appendChild(customerPhone);
    displayDiv.appendChild(customerTime);
    displayDiv.appendChild(customerContact);
}

/**
 * 
 * @returns Get all data from form and returns it in a ContactForm object
 */
function getContactForm():ContactForm{
    // create contact information
    let info = new ContactForm();
    // populate with data from form
    info.name = getInputById("name").value;
    info.email = getInputById("email").value;
    info.phone = parseInt(getInputById("phone").value);
    info.am = getInputById("time-am").checked;
    info.pm = getInputById("time-pm").checked;
    info.preferedContact = 
        (<HTMLSelectElement>document.getElementById("contact-type")).value;
    // return information
    console.log(info);
    return info;
}

function clearDisplay(){
    let displaySummary = getInputById("myPopup");
    displaySummary.innerText = "";
}

function clearAll(){
    let errorSummary = getInputById("error-summary");
    errorSummary.innerText = "";
}

var getInputById = function(id:string){
    return (<HTMLInputElement>document.getElementById(id));
}