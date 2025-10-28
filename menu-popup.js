function toggleMenu() {
const miniMenu = document.getElementById("mini-menu");
const bigMenu = document.getElementById("big-menu");
if(miniMenu.classList.contains("hide-menu")){
    miniMenu.classList.remove("hide-menu");
    bigMenu.classList.add("hide-menu");
} else{
      miniMenu.classList.add("hide-menu");
    bigMenu.classList.remove("hide-menu");
}
}