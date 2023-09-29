'use strict';

const isMobile = {
  Android: () => {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: () => {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: () => {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: () => {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: () => {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: () => {
    return (
      isMobile.Android()
      || isMobile.BlackBerry()
      || isMobile.iOS()
      || isMobile.Opera()
      || isMobile.Windows()
    );
  },
};

const menuIcon = document.querySelector('.header__menu-button');
const body = document.querySelector('.page__body');
const mainMenu = document.querySelector('.navigation');
const scrolWidth = window.innerWidth - document.body.clientWidth;

if (menuIcon) {
  menuIcon.addEventListener('click', (e) => {
    menuIcon.classList.toggle('_opener');
    menuIcon.classList.toggle('_closer');
    body.classList.toggle('_lock');
    mainMenu.classList.toggle('_open');

    if (!isMobile.any()) {
      if (body.classList.contains('_lock')) {
        body.style.paddingRight = scrolWidth + 'px';
      } else {
        body.style.paddingRight = 0;
      }
    }
  });
}

const setItemsHeight = () => {
  const impactItems = document.querySelectorAll('.impact__item');
  let maxItemHeight = impactItems[0].offsetHeight;

  if (impactItems) {
    for (let i = 1; i < impactItems.length; i++) {
      if (impactItems[i].offsetHeight > maxItemHeight) {
        maxItemHeight = impactItems[i].offsetHeight;
      }
    }

    impactItems.forEach(item => {
      item.style.height = maxItemHeight + 'px';
    });
  };
}

setItemsHeight();