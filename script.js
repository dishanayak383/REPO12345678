function validate()
{
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value

    if (username=="admin" && password=="admin")
    { 
        alert("Login Successful")
        username=""
    }
    else
    {
        alert("Login Failed")
        password=""
    }

    
}

