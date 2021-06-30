const hamMenu = document.querySelector(".hamMenu");
const navDiv = document.querySelector("#nav-bar")
 let open = false;
hamMenu.addEventListener("click",()=>{
    if(open === false)
    {
        navDiv.style.display = "block";
        open = true;
    }
    else{
        navDiv.style.display = "none";
        open = false;
    }
    
})