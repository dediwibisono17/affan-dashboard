let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let arrow = document.querySelector('.arrow-round');

btn.onclick = function() {
    sidebar.classList.toggle("active");
    btn.classList.toggle('rotate')
}

var mq = window.matchMedia("(max-width: 766px)");
if (mq.matches) {
    // window width is at less than 570px
    sidebar.classList.remove('active')
    arrow.style.display = "none";
} else {
    // window width is greater than 570px
}