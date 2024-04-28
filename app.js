function showfir(){
    document.getElementById('section1').style.display = 'block';
    document.getElementById('section2').style.display = 'none';
}
function showsec(){
    document.getElementById('section2').style.display = 'block';
    document.getElementById('section1').style.display = 'none';
}
function colorfir(){
    document.getElementById('act-1').style.backgroundColor = 'rgb(243, 85, 37)';
    document.getElementById('act-2').style.backgroundColor = 'rgb(30, 30, 30)';
}
function colorsec(){
    document.getElementById('act-2').style.backgroundColor = 'rgb(243, 85, 37)';
    document.getElementById('act-1').style.backgroundColor = 'rgb(30, 30, 30)';
}
function faqfir(){
    document.getElementById('faq-1').style.display = 'block';
    document.getElementById('faq-2').style.display = 'none';
    document.getElementById('faq-3').style.display = 'none';
}
function faqsec(){
    document.getElementById('faq-2').style.display = 'block';
    document.getElementById('faq-1').style.display = 'none';
    document.getElementById('faq-3').style.display = 'none';
}
function faqthi(){
    document.getElementById('faq-3').style.display = 'block';
    document.getElementById('faq-1').style.display = 'none';
    document.getElementById('faq-2').style.display = 'none';
}
function faqcolorfir(){
    document.getElementById('ques-1').style.color = 'rgb(243, 85, 37)';
    document.getElementById('ques-2').style.color = 'rgb(30, 30, 30)';
    document.getElementById('ques-3').style.color = 'rgb(30, 30, 30)';
}
function faqcolorsec(){
    document.getElementById('ques-2').style.color = 'rgb(243, 85, 37)';
    document.getElementById('ques-1').style.color = 'rgb(30, 30, 30)';
    document.getElementById('ques-3').style.color = 'rgb(30, 30, 30)';
}
function faqcolorthi(){
    document.getElementById('ques-3').style.color = 'rgb(243, 85, 37)';
    document.getElementById('ques-1').style.color = 'rgb(30, 30, 30)';
    document.getElementById('ques-2').style.color = 'rgb(30, 30, 30)';
}
function navigationmenu(){
    document.getElementById('nav_bar').style.display = 'block';
}
function hide_nav_bar(){
    document.getElementById('nav_bar').style.display = 'none';
}