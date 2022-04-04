import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './assets/css/normalize.css';
import './assets/css/style.css';
import './assets/css/media.css';
import './animation.js'



ReactDOM.render(<App />, document.getElementById('root'));


document.addEventListener("DOMContentLoaded", function () {
    const navBar = document.getElementById('navBar');
    window.addEventListener('scroll', function () {

        if (window.scrollY >= 110) {
            navBar.classList.add('topNav--bgDark');
        } else {
            navBar.classList.remove('topNav--bgDark');
        }

    });

    //menu burger
    const menuBurger = document.querySelector('.burger-btn');
    const menuList = document.querySelector('.nav__section--main');
    const burgerLine = document.querySelector('.nav__section--burger');

    menuBurger.addEventListener("click", function(e) {
        menuBurger.classList.toggle('active-burger');
        menuList.classList.toggle('list--active');
        burgerLine.classList.toggle('absolute--top-nav');
    })



    //Accordion
    const accordionItem = document.getElementsByClassName('accordion__item');
    accordionItem[0].classList.add("accordion__item--active");
    const elements = document.getElementsByClassName('accordion__trigger');
    for (let item = 0; item < elements.length; item++){
        
        elements[item].addEventListener('click', () => {
        
            for (let c = 0; c < accordionItem.length; c++){
                accordionItem[c].classList.remove('accordion__item--active')
            }
            accordionItem[item].classList.add('accordion__item--active');
        })
    }
});