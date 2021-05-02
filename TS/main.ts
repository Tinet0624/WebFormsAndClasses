class ContactForm{
    name:String;
    email:String;
    phone:number;
    am:boolean;
    pm:boolean;
    preferedContact:String;
}


window.onload = function(){
    let submitBtn = 
        getById("submit-button");
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
    //TO DO display information in messagebox
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

var getById = function(id:string){
    return (<HTMLInputElement>document.getElementById(id));
}