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
var getById = function (id) {
    return document.getElementById(id);
};
