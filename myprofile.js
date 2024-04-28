function alert_msg(){
    alert('Sorry, but this information is non-editable.');
}
function for_password(){
    let eye_slash = document.getElementById('edit_eye');
    let pass = document.getElementById('pass');
    pass.innerText = "login portal";
    eye_slash.classList.add('fa-eye');
}
function hide_pass(){
    let eye_slash = document.getElementById('edit_eye');
    let pass = document.getElementById('pass');
    pass.innerText = "............";
    eye_slash.classList.remove('fa-eye');
}