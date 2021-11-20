
const items = document.querySelector("main section article .vid");
items.addEventListener("mouseenter", e=>{
    e.currentTarget.querySelector("video").play();
});

items.addEventListener("mouseleave", e=>{
    e.currentTarget.querySelector("video").pause();
});