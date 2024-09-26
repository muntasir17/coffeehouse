let menuBtn = document.querySelector(".menuIcon");
let nav_links = document.querySelector(".nav_links");
let menuICon = document.querySelector("i");
menuBtn.addEventListener("click", ()=>{
    nav_links.classList.toggle("open");
    let isopen = nav_links.classList.contains("open");
    menuICon.setAttribute("class", isopen? "ri-close-line" : "ri-menu-line")
});
nav_links.addEventListener("click", ()=>{
    nav_links.classList.toggle("open");
    menuICon.setAttribute("class", "ri-menu-line" )
})
let scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration: 1000,
};

ScrollReveal().reveal(".outline img",{
    ...scrollRevealOption,
// origin:"rigth",
});
 ScrollReveal().reveal(".outline img",{
     ...scrollRevealOption,
 delay : 400,
});

ScrollReveal().reveal(".innerbox p",{
    ...scrollRevealOption,
delay : 600,
});
ScrollReveal().reveal(".innerbox h3",{
    ...scrollRevealOption,
delay : 400,
});


ScrollReveal().reveal(".item_images img",{
    ...scrollRevealOption,
// origin:"rigth",
});
 ScrollReveal().reveal(".item_images img",{
     ...scrollRevealOption,
 delay : 300,
});
ScrollReveal().reveal(".list i",{
    ...scrollRevealOption,
origin:"top",
});
 ScrollReveal().reveal(".list i",{
     ...scrollRevealOption,
 delay : 300,
});
ScrollReveal().reveal(".container ",{
    ...scrollRevealOption,
origin:"left",
});
ScrollReveal().reveal(".container img",{
    ...scrollRevealOption,
delay : 400,
});
ScrollReveal().reveal(".container img",{
    ...scrollRevealOption,
origin:"bottom",
});
ScrollReveal().reveal(".contactt img",{
    ...scrollRevealOption,
origin:"rigth",
});
let testimonial = [
    {
photourl : "najib.jpg",
kotha : "Had a meal at their restaurant, and the service was absolutely top-notch!",
ratings : "Rating : 4 Out of 5",
    },
    {
photourl : "rifat.jpg",
kotha : "I recently dined at CoffeeShop and overall it was a delightful experience!",
ratings : "Rating : 3 Out of 5",
    },
    {
photourl : "robin.jpg",
kotha : "Tried out their restaurant, and the service totally impressed me!",
ratings : "Rating : 4.5 Out of 5",
    },
    {
photourl : "emely.jpg",
kotha : "Checked out their restaurant, and not only was the service great, but the food was just delicious!",
ratings : "Rating : 3.5 Out of 5",
    },
    {
photourl : "mice.jpg",
kotha : "Went to their place, and everything from the welcoming staff to the awesome food made it worth the visit!",
ratings : "Rating : 3 Out of 5",
    },
]
let newImage = document.querySelector(".new_image");
let write = document.getElementById("write");
let rate = document.getElementById("rate");
let idx = 0;
updateImage();
function updateImage(){
let {photourl,kotha,ratings} = testimonial[idx]
newImage.src = photourl;
write.innerHTML = kotha;
rate.innerHTML = ratings;
idx++;

if(idx === testimonial.length){
    idx = 0;
}
    setTimeout(() => {
        updateImage()
    }, 4000);
}





































