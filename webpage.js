function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="vishwanath" && password=="vishwanath")
    {
        alert("login successful");
        window.open('homepage.html')
    }
    else
    {
        alert("login failed");
    }
}