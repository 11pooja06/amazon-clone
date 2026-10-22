
const imgs = document.querySelectorAll('.header-slider ul img');

const pre_Btn = document.querySelector('.control-previous');
const next_Btn = document.querySelector('.control-next');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }

    imgs[n].style.display = 'block';
}

changeSlide();

pre_Btn.addEventListener('click', (e)=>{
    if (n>0){
        n--;
    }else{
        n = imgs.length-1;

}
changeSlide();
});
pre_Btn.addEventListener('click', (e)=>{
    if (n>0){
        n--;
    }else{
        n = imgs.length-1;

}
changeSlide();
});
pre_Btn.addEventListener('click', (e)=>{
    if (n>0){
        n--;
    }else{
        n = imgs.length-1;

}
changeSlide();
});

next_Btn.addEventListener('click', (e)=>{
    if (n<imgs.length-1){
        n++;
    }else{
        n = 0;

}
changeSlide();
});

let autoSlide = setInterval(() => {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
}, 2000);
// --- FEATURE 3: Back to Top Button ---
const backToTopBtn = document.querySelector('.back-to-top');

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});
