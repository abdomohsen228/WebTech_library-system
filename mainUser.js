// Get references to the input fields and the error message element
let userName = document.getElementById('Username');
let password = document.getElementById('password');
let cpassword = document.getElementById('confirm_password');
let email = document.getElementById('email');
let type = document.getElementById('type');
let error = document.getElementById('error');
let submit = document.getElementById('submit');

let navigate;

// Function to determine the type of user
function chosing() {
    if (type.value == 1) {
        navigate = 'user';
    } else {
        navigate = 'admin';
    }
}
function emailExists(email) {
    if(userObjects==[] || adminObjects==[])return false;
    for(let i=0;i<userObjects.length;i++){
        if(email.value==userObjects[i].email){
            return true;
        }
    }
    for(let i=0;i<adminObjects.length;i++){
        if(email.value==adminObjects[i].email){
            return true;
        }
    } 
    return false;
}

// Function to check if username already exists
function usernameExists(userName) {
    if(userObjects==[] || adminObjects==[])return false;
    for(let i=0;i<userObjects.length;i++){
        if(userName.value==userObjects[i].userName){
            return true;
        }
    }
    for(let i=0;i<adminObjects.length;i++){
        if(userName.value==adminObjects[i].userName){
            return true;
        }
    } 
    return false;
}

// Function to check if passwords match
function check() {
    if (password.value !== cpassword.value) {
        //error.style.visibility = 'visible';
        return true; // Show error message if passwords don't match
    } else {
        return false;
        //error.style.visibility = 'hidden'; // Hide error message if passwords match
    }
}

// Creating objects for users and admins
 let userObjects = [];

let adminObjects = [];

// Retrieving objects from localStorage
if (localStorage.user != null) {
    userObjects = JSON.parse(localStorage.user);
}

if (localStorage.admin != null) {
    adminObjects = JSON.parse(localStorage.admin);
}

// Event handler for submit button
submit.onclick = function(event) {
    event.preventDefault();
    chosing(); // Determine the type of user
    let samePassword=check(); // Check if passwords match
    if(samePassword)
    {
        error.style.visibility = 'visible';
        samePassword=check();
        event.preventDefault();
    }
    else
    {
        error.style.visibility = 'hidden';
    }

    // Create a new object
    let newObj = {
        userName: userName.value,
        password: password.value,
        email: email.value,
        type: navigate
    };
    let foundMail=emailExists(email);
    let foundUser=usernameExists(userName);
    if(foundMail)
    {
        foundMail=emailExists(email);
        alert('Email already exists. Please choose a different username.');
        userName.value = '';
        password.value = '';
        cpassword=cpassword.value = '';
        email.value = '';
        event.preventDefault();
        return;
    }
    if(foundUser)
    {
        foundUser=emailExists(userName);
        alert('Username already exists. Please choose a different username.');
        userName.value = '';
        password.value = '';
        cpassword=cpassword.value = '';
        email.value = '';
        event.preventDefault();
        return;
    }



    // Add the object to the appropriate array and update localStorage
    foundUser=emailExists(userName);
    foundMail=emailExists(email);
    if (navigate == 'admin'  && foundUser == false && foundMail == false) {
        adminObjects.push(newObj);
        localStorage.setItem('admin', JSON.stringify(adminObjects));
        window.location.href = 'Admin_Home.html';
    } else if(navigate == 'user' && foundUser==false && foundMail==false) {
        userObjects.push(newObj);
        localStorage.setItem('user', JSON.stringify(userObjects));
        window.location.href = 'User_Home.html';
    }
};
console.log(userObjects);
