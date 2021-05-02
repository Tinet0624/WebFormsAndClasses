class ContactForm {
}
window.onload = function () {
    let submitBtn = getById("submit-button");
    submitBtn.onclick = submit;
};
function submit() {
    console.log("Submit button was hit");
    if (isValid) {
        let input = getContactForm();
        displayInput(input);
    }
}
function isValid() {
    return true;
}
function displayInput(userInput) {
    let displayDiv = getById("myPopup");
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
    info.name = getById("name").value;
    info.email = getById("email").value;
    info.phone = parseInt(getById("phone").value);
    info.am = getById("time-am").checked;
    info.pm = getById("time-pm").checked;
    info.preferedContact =
        document.getElementById("contact-type").value;
    console.log(info);
    return info;
}
function miniModel() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
var getById = function (id) {
    return document.getElementById(id);
};
