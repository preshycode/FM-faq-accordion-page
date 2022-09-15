const section = document.querySelectorAll(".section");


for (i=0; i < section.length; i++) {
    section[i].addEventListener("click", function () {
        this.classList.toggle("active")
       
    })
    
}