function pass_match(){
    var pass = document.getElementById("second").value;
    var confirm_pass = document.getElementById("pass").value; 
    var inputs = document.querySelectorAll('.input').value;
    var text;
  
    if (pass === confirm_pass && pass !== '') {
        window.location.href= "newuser.html";
        document.getElementById("demo").style.display = 'none';
    }
    else if (pass === ''){
        text = "Please fill out the given fields";
        document.getElementById("demo").innerHTML = text;
        document.getElementById("demo").style.display = 'block';
    }
    else {
        text = "Passwords don't Match";
        document.getElementById("demo").innerHTML = text;
        document.getElementById("demo").style.display = 'block';
    }
}