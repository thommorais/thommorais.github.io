"use strict";var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)||navigator.userAgent.match(/WPDesktop/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}},DOM=document,d=DOM.querySelector.bind(DOM),dd=DOM.querySelectorAll.bind(DOM);if(isMobile.any()){var openMenu=function(){body.classList.toggle("menu-open")},body=d("body"),mobi=body.querySelector("#mobile"),i=DOM.createElement("i");mobi.appendChild(i),mobi.addEventListener("click",openMenu)}