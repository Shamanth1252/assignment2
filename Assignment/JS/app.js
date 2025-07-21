const menu=document.getElementById("logo-menu");
const MobileMenu=document.getElementById("mobile-nav");

menu.addEventListener("click",function(){
    if(MobileMenu.style.display==="block"){
        MobileMenu.style.display="none";
    }else{
        MobileMenu.style.display="block";
    }
})


//Form Validation

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields.");
      e.preventDefault();
      return;
    }

    alert("Form submitted successfully!");
    
  });

