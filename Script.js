let btn_prev = document.querySelector('.prev');
let btn_next = document.querySelector('.next');

const images = document.querySelectorAll('.photo');
let i = 0;
let count = document.querySelector('.count');



btn_prev.onclick = function () {
          
    images[i].className = 'photo';
    i--;
    if (i < 0) {
        i = images.length-1;
    } 
    count.innerHTML = i+1;
    images[i].className = 'showed';
}


btn_next.onclick = function () {
    images[i].className = 'photo';
    i++;
    if (i >= images.length) {
        i = 0;
    } 
    count.innerHTML = i+1;
    images[i].className = 'showed';
}

