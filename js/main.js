let header = document.querySelector("header");

window.onscroll = function() {
    if (this.scrollY >= 50) {
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
}

let links = document.getElementById('links');

function Open_Menu() {
    links.classList.toggle("active")
}