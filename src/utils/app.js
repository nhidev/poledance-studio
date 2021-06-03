export const openMenu = (iconMenu, menuOverlay ) => {

  if (iconMenu.classList.contains('icon-open')) {
      menuOverlay.classList.add('menu-close');
      iconMenu.classList.remove('icon-open');
      body.classList.remove('no-scroll');
      iconMenu.classList.remove('sticky');

      setTimeout(function () {
          menuOverlay.classList.remove('menu-open');
      }, 800);
      setTimeout(function () {
          menuOverlay.classList.remove('menu-close');
      }, 900);

  } else {
      menuOverlay.classList.remove('menu-close');
      menuOverlay.classList.add('menu-open');
      iconMenu.classList.add('icon-open');
      body.classList.add('no-scroll');

      setTimeout(function () {
          iconMenu.classList.remove('sticky');
      }, 500);

  }
}