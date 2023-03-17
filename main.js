let firstName = prompt("ur name", "here...");
while(isNaN(firstName)!=true){
    firstName = prompt("ur name", "here...");
}

let age = prompt("ur age","here...");
while(isNaN(age)==true){
    age = prompt("ur age", "here...");
}


let confirmAge;
if(age<18)
{
    alert("You are not allowed to visit this website");
}
else if(age>18 && age<=22)
{
    confirmAge = confirm("Are you sure you want to continue?");
    if(confirmAge)
    {
        alert("Welcome, "+firstName);
    }
    else{
        alert("You are not allowed to visit this website");
    }
}
else if(age>22)
{
    alert("Welcome, "+firstName);
}
