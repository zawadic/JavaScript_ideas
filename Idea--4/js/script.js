/* */
const icons = document.querySelectorAll('.image-icon i');

let i = 1;

// right_icon= document.querySelectorAll('button left-arrow');
// right_icon.addEventListener("click", function () {
    
// })
setInterval(() => {
    i++;

    const icon = document.querySelector('.image-icon .slide');
    icon.classList.remove('slide');

    if (i > icons.length) {
        icons[0].classList.add('slide');
        i = 1;
    }
    icon.nextElementSibling.classList.add('slide');
}, 3000);