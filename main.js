let header = document.querySelector('header')
let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('navbar')

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrolly > 0);
})

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredslide: true,
    autoplay: {
        delay: 5000,
        disableOnInteracte: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

})


// Swiper
var swiper = new swiper(".coming-container", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 55000,
        disableOnInteraction: false,

    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerview: 2,
        },
        568: {
            slidesPerview: 3,
        },
        768: {
            slidesPerview: 4,
        },
        968: {
            slidesPerview: 5,
        },
    },
});
<script>
// Get the model
var modal =
document.getElementById('id01')


//When the user click any where out side of the model, close it
window.onclick = function(event) {
    if (event.target == modal) {
     Modal.style.display = "none";
    }
}
</script>