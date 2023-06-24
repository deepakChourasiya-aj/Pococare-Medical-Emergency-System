document.querySelector("#navbar").innerHTML = `
<div id="nav-cont">
    <div id="hamb">
        <i class="fa-solid fa-bars"></i>
    </div>
    <div data-aos="zoom-out" data-aos-duration="1000" id="nav-logo">
        <div id="nav-img">
        <img  alt="Logo" src="https://www.pococare.com/Images/logo.png"/>

        </div>
    </div>
    <div data-aos="zoom-out" data-aos-duration="1000" id="nav-menu">
        <li id="find-doc">Upcoming Appointment</li>
        <li id="doctor-admin">Create Slot</li>
        <li id ="doctor-access">Create Profile</li>
    </div>
    <div data-aos="zoom-out" data-aos-duration="1000" id="nav-user-details">
        <button id="nav-login">Login</button>
        <button id="nav-reg">Signup</button> 
        <button id="nav-logout">Logout</button> 
        </div>
        
</div>
`;
document.getElementById("nav-reg").addEventListener("click", (e) => {
  window.location.href = "./register.html";
});
document.getElementById("nav-login").addEventListener("click", (e) => {
  window.location.href = "./login.html";
});

document.getElementById("find-doc").addEventListener("click", (e) => {
  window.location.href = "./checkAppointment.html";
});
document.getElementById("doctor-admin").addEventListener("click", (e) => {
  let role = JSON.parse(localStorage.getItem("role"));
  if (role === "doctor") {
    window.location.href = "scheduling.html";
  } else {
    alert("Access denied this special access only for doctors");
  }
});
document.getElementById("nav-img").addEventListener("click", (e) => {
  window.location.href = "../index.html";
});
document.getElementById("nav-logout").addEventListener("click", (e) => {
  localStorage.clear("token");
  let token = localStorage.getItem("token");
  if (token == null || token == undefined) {
    alert("logout successfully");
    window.location.reload();
  }
});
document.getElementById("doctor-access").addEventListener("click", (e) => {
  let role = JSON.parse(localStorage.getItem("role"));
  if (role === "doctor") {
    window.location.href = "scheduling.html";
  } else {
    alert("Access denied this special access only for doctors");
  }
});
