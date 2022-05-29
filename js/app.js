$(document).on('click','.show-more', function(){
    $(this).find('.help-arrow').toggleClass('rotation')
    $(this).children('.children').slideToggle()
})

let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let showmore = document.querySelector(".show-more");
let notif = document.querySelector(".notif-number");
let searchBtn = document.querySelector(".bx-search");
let arrow = document.querySelector('.arrow-round');

btn.onclick = function() {
    sidebar.classList.toggle("active");
    btn.classList.toggle('rotate');
    showmore.classList.toggle('hiding');
    notif.classList.toggle('hiding');
}

var mq = window.matchMedia("(max-width: 766px)");
if (mq.matches) {
    // window width is at less than 570px
    sidebar.classList.remove('active')
    arrow.style.display = "none";
} else {
    // window width is greater than 570px
}

