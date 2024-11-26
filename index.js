const btnAbout = document.getElementById('btnAbout');
const btnCourse = document.getElementById('btnCourse');
const btnContact = document.getElementById('btnContact');
const btnbtnEnroll = document.getElementById('btnEnroll')

btnCourse.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href="/conn/course/Course.html"
});
btnAbout.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href="/conn/about/about.html"
});
btnContact.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href="/conn/contact/contact.html"
});
btnbtnEnroll.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href="/Prefinal Exam/prefinals.html"
});