function ibg(){let e=document.querySelectorAll(".ibg");for(var t=0;t<e.length;t++)e[t].querySelector("img")&&(e[t].style.backgroundImage="url("+e[t].querySelector("img").getAttribute("src")+")")}ibg(),$(document).ready((function(){$(".header__burger").click((function(e){$(this).toggleClass("active"),$(".header__menu").toggleClass("active"),$("body").toggleClass("lock")}))}));