const hamMenu = document.querySelector(".hamMenu");
const navDiv = document.querySelector("#nav-bar");
const secondNav = document.querySelector("#second-nav")
 let open = false;




hamMenu.addEventListener("click",()=>{
    if(open === false)
    {
       // navDiv.style.display = "block";
        secondNav.classList.remove("hide");
        open = true;
    }
    else{
        secondNav.classList.add("hide");
        open = false;
    }

    
    
})