
const items = document.querySelectorAll("main section article .vid");
for(let el of items){
    el.addEventListener("mouseenter", e=>{
        e.currentTarget.querySelector("video").play();
    });
    
}

for(let el of items){
    el.addEventListener("mouseleave", e=>{
        e.currentTarget.querySelector("video").pause();
    });
}

