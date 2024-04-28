function myFunction() {
    var pass = document.getElementById("second").value;
    var user = document.getElementById("first").value; 
    var text;
  
    if (pass === "login portal" && user === "areeba") {
      window.location.href= "dashboard.html";
      document.getElementById("demo").style.display = 'none';

    } 
    else {
      text = "Wrong username or password";
      document.getElementById("demo").innerHTML = text;
      document.getElementById("demo").style.display = 'block';
    }
  }
