let sec = document.querySelector('.progress > .progressBar');
let num = document.querySelector('.progressBar > p'); 

window.onscroll = () => {

        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        // if (top >= offset && top < offset + height) {
        //     navLinks.forEach(links => {
        //         links.classList.remove('active');
        //         document.querySelector('.mainTOC[href*=' + id + ']').classList.add('active');
        //     });
        // }

        sec.style.height = `${top}px`;
        num.innerText = `${Math.round(top)}px`;
        

}

