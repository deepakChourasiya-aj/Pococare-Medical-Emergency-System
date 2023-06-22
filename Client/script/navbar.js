
document.querySelector("#navbar").innerHTML = `
<div id="nav-cont">
    <div id="hamb">
        <i class="fa-solid fa-bars"></i>
    </div>
    <div data-aos="zoom-out" data-aos-duration="1000" id="nav-logo">
        <div id="nav-img">
        LOGO
        </div>
    </div>
    <div data-aos="zoom-out" data-aos-duration="1000" id="nav-menu">
        <li id="book-app">Book an appointment</li>
        <li id="find-doc">Find Doctors</li>
        <li>Departments</li>
        <li>Security & Help</li>
    </div>
    <div data-aos="zoom-out" data-aos-duration="1000" id="nav-user-details">

        <button id="nav-login">Login</button>
        <button id="nav-reg">Signup</button>    </div>
</div>
`

document.getElementById("nav-reg").addEventListener("click",(e)=>{
    window.location.href = "./html/register.html"
})
document.getElementById("nav-login").addEventListener("click",(e)=>{
    window.location.href = "./html/login.html"
})

document.getElementById("find-doc").addEventListener("click",(e)=>{
    window.location.href = "./html/available.html";
})
document.getElementById("book-app").addEventListener("click",(e)=>{
    window.location.href = "./html/available.html";
})