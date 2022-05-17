let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let arrow = document.querySelector('arrow-round');

btn.onclick = function() {
    sidebar.classList.toggle("active");
    btn.classList.toggle('rotate')
}