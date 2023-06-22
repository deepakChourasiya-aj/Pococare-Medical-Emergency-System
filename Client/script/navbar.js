
document.querySelector("#navbar").innerHTML = `
<div id="nav-cont">
    <div id="hamb">
        <i class="fa-solid fa-bars"></i>
    </div>
    <div data-aos="zoom-out" data-aos-duration="1000" id="nav-logo">
        <div id="nav-img">
        <img alt="Logo" src="https://www.pococare.com/Images/logo.png"/>

        </div>
    </div>
    <div data-aos="zoom-out" data-aos-duration="1000" id="nav-menu">
        <li id="book-app">Book appointment</li>
        <li id="find-doc">Specialist Doctors</li>
            <li id ="doctor-access">Create Profile</li>
        <li>Emergency Support</li>
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
document.getElementById("doctor-access").addEventListener("click",(e)=>{
  let role = JSON.parse(localStorage.getItem("role"))  
  if(role==="doctor"){
      window.location.href = "./html/profile.html";
  }else{
    alert("Access denied this special access only for doctors")
  }
})