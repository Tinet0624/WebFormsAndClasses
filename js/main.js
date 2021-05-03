class ContactForm {
}
window.onload = function () {
    let submitBtn = getInputById("submit-button");
    submitBtn.onclick = submit;
};
function submit() {
    console.log("Submit button was hit");
    if (isValid() == true) {
        let input = getContactForm();
        displayInput(input);
    }
}
function isValid() {
    let valid = true;
    let errorSummary = getInputById("error-summary");
    let name = getInputById("name").value;
    if (name == "") {
        valid = false;
        let errorName = document.createElement("p");
        errorName.innerText = `A Name is required!`;
        errorSummary.appendChild(errorName);
    }
    let email = getInputById("email").value;
    if (email == "") {
        valid = false;
        let errorEmail = document.createElement("p");
        errorEmail.innerText = `An Email is required!`;
        errorSummary.appendChild(errorEmail);
    }
    let phone = getInputById("phone").value;
    if (phone == "") {
        valid = false;
        let errorPhone = document.createElement("p");
        errorPhone.innerText = `An Phone Number is required!`;
        errorSummary.appendChild(errorPhone);
    }
    let am = getInputById("time-am").checked;
    let pm = getInputById("time-pm").checked;
    if (am == false && pm == false) {
        valid = false;
        let errorTime = document.createElement("p");
        errorTime.innerText = `Pick Am or Pm!`;
        errorSummary.appendChild(errorTime);
    }
    let contact = document.getElementById("contact-type").value;
    if (contact == "Choose one") {
        valid = false;
        let errorContact = document.createElement("p");
        errorContact.innerText = `Pick a Preferred Contact!`;
        errorSummary.appendChild(errorContact);
    }
    return valid;
}
function displayInput(userInput) {
    let displayDiv = getInputById("myPopup");
    let customerName = document.createElement("p");
    customerName.innerText = `Name: ${userInput.name}`;
    let customerEmail = document.createElement("p");
    customerEmail.innerText = `Email: ${userInput.email}`;
    let customerPhone = document.createElement("p");
    customerPhone.innerText = `Phone: ${userInput.phone}`;
    let customerTime = document.createElement("p");
    let time = "pm";
    if (userInput.am) {
        time = "am";
    }
    customerTime.innerText = `Contact time: ${time}`;
    let customerContact = document.createElement("p");
    customerContact.innerText = `Choice of contact: ${userInput.preferedContact}`;
    displayDiv.appendChild(customerName);
    displayDiv.appendChild(customerEmail);
    displayDiv.appendChild(customerPhone);
    displayDiv.appendChild(customerTime);
    displayDiv.appendChild(customerContact);
}
function getContactForm() {
    let info = new ContactForm();
    info.name = getInputById("name").value;
    info.email = getInputById("email").value;
    info.phone = parseInt(getInputById("phone").value);
    info.am = getInputById("time-am").checked;
    info.pm = getInputById("time-pm").checked;
    info.preferedContact =
        document.getElementById("contact-type").value;
    console.log(info);
    return info;
}
function miniModel() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function clearAll() {
    let errorSummary = getInputById("error-summary");
    errorSummary.innerText = "";
}
var getInputById = function (id) {
    return document.getElementById(id);
};
