function subirTela(){
   window.scrollTo({
       top: 0,
       left: 0,
       behavior: 'smooth'
   });
   
}

function decidirBotaoScroll() {
    if(window.scrollY === 0){
        document.querySelector('.scrollButton').style.display = 'none';
    }else {
        document.querySelector('.scrollButton').style.display = 'block';
    }
}

//setInterval(decidirBotaoScroll, 1000); esse funcina tambem, só que nao é recomendado
window.addEventListener('scroll', decidirBotaoScroll);