class ContactForm {
}
window.onload = function () {
    let submitBtn = getInputById("submit-button");
    submitBtn.onclick = submit;
};
function submit() {
    console.log("Submit button was hit");
    clearAll();
    if (isValid() == true) {
        let input = getContactForm();
        displayInput(input);
    }
}
function isValid() {
    let isValid = true;
    let name = getInputById("name").value;
    if (name == "") {
        isValid = false;
        let errorSummary = document.getElementById("error-summary-name");
        errorSummary.innerText = "A Name is required!";
    }
    let email = getInputById("email").value;
    if (email == "") {
        isValid = false;
        let errorSummary = document.getElementById("error-summary-email");
        errorSummary.innerText = "A Email is required!";
    }
    let phone = getInputById("phone").value;
    if (phone == "") {
        isValid = false;
        let errorSummary = document.getElementById("error-summary-phone");
        errorSummary.innerText = "A Phone Number is required!";
    }
    let am = getInputById("time-am").checked;
    let pm = getInputById("time-pm").checked;
    if (am == false && pm == false) {
        isValid = false;
        let errorSummary = document.getElementById("error-summary-time");
        errorSummary.innerText = "Please Choose a time to be contacted!";
    }
    let contact = getInputById("contact-type").value;
    if (contact == "Choose one") {
        isValid = false;
        let errorSummary = document.getElementById("error-summary-contact");
        errorSummary.innerText = "Pick a preferred contact!";
    }
    return isValid;
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
    let errorSummary = document.getElementById("error-summary").querySelectorAll("p");
    errorSummary.innerText = "";
}
var getInputById = function (id) {
    return document.getElementById(id);
};
