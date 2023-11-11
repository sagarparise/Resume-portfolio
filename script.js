
let tablinks=document.getElementsByClassName("tab-links");
let tabcontests=document.getElementsByClassName("tab-contents");
let navlinks = document.querySelector(".nav-links");
let menu = document.querySelector("nav > img");

function opentab(tabname)
{
    
    for(let tablink of tablinks)
    {
       tablink.classList.remove("active-link");
    }

    for(let tabcontest of tabcontests)
    {
        tabcontest.classList.remove("active-tab");
    }

    event.target.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}
menu.addEventListener("click", function(){
    navlinks.classList.toggle("show");
})


