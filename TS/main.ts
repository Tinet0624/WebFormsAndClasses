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
    let submitBtn = getById("submit-button");
    submitBtn.onclick = submit;
}

function submit(){
    console.log("Submit button was hit");
    //check if valid
    if(isValid){
        //get data
        let input = getContactForm();
        displayInput(input);
    }
}

//ADD VALIDATION CODE!!********************************************
function isValid(){
    return true;
}

function displayInput(userInput:ContactForm):void{
    let displayDiv = getById("myPopup");

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
    info.name = getById("name").value;
    info.email = getById("email").value;
    info.phone = parseInt(getById("phone").value);
    info.am = getById("time-am").checked;
    info.pm = getById("time-pm").checked;
    info.preferedContact = 
        (<HTMLSelectElement>document.getElementById("contact-type")).value;
    // return information
    console.log(info);
    return info;
}

function miniModel() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

var getById = function(id:string){
    return (<HTMLInputElement>document.getElementById(id));
}