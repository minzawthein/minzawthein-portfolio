
let darktheme = document.getElementById('dark');
darktheme.addEventListener('click', function() {   
    if(darktheme.firstElementChild.lastElementChild.getAttribute("fill") === null || darktheme.firstElementChild.lastElementChild.getAttribute("fill") === "#FDE35A")
    {
        darktheme.firstElementChild.lastElementChild.setAttribute('fill',"#000000");
        document.head.getElementsByTagName('link')[2].href= "css/dark-theme.css";
        localStorage.setItem("link", "css/dark-theme.css");
    }
    else if(darktheme.firstElementChild.lastElementChild.getAttribute("fill") === "#000000") {
        darktheme.firstElementChild.lastElementChild.setAttribute('fill',"#FDE35A");
        document.head.getElementsByTagName('link')[2].href= "css/white-theme.css";
        localStorage.setItem("link", "css/white-theme.css");
    }        
},false); 

window.addEventListener('load', function() {
    if(localStorage.getItem("link")) {
        document.head.getElementsByTagName('link')[2].href = localStorage.getItem("link");
    }
},false);
    
window.addEventListener('scroll',() => {
    if(window.innerHeight >= 650) {
        var left_fade = document.getElementsByClassName('info-heading')[0].firstElementChild.classList.add('left-fade');
        var right_fade = document.getElementsByClassName('info-heading')[0].lastElementChild.classList.add('rightFade');
        var left_fade_1 = document.getElementsByClassName('info-body')[0].firstElementChild.classList.add('left-fade');
        var right_fade_1 = document.getElementsByClassName('info-body')[0].lastElementChild.classList.add('rightFade');
    }  
},false);



