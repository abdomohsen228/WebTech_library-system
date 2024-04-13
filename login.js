const userData = JSON.parse(localStorage.getItem('user'));
// Now you can use userData in this file
let password2=document.getElementById("password2");
let email2=document.getElementById("email2");
let submit2=document.getElementById("submit2");
function verify(email2,password2)
{
    for(let i=0;i<userObjects.length;i++){
        if(email2==userObjects[i].email)
        {
            if(password2==userObjects[i].password)
            {
                c=1;
                return true;
            }
        }
    }
    for(let i=0;i<adminObjects.length;i++){
        if(email2==adminObjects[i].email)
        {
            if(password2==adminObjects[i].password)
            {
                c=2;
                return true;
            }
        }
    }
    return false;
}
submit2.onclick = function(event){
    let access=verify(email2,password2);
    if(access)
    {
        if(c==1)
        {
            window.location.href = 'User_Home.html';
        }else{
            window.location.href = 'Admin_Home.html';
        }
    }else
    {
        access=verify(email2,password2);
        
        alert('Incorrect Password,try again ');
        email2.value = '';
        password2.value = '';
        event.preventDefault();
    }

}
