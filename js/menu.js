(() => {
    const refs = {
      openMenuBtn: document.querySelector('.btn-open'),
      closeMenuBtn: document.querySelector('.btn-close'),
      menu: document.querySelector('.menu'),
      body: document.querySelector('body'),
      menuList: document.querySelector('.menu-nav'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    refs.menuList.addEventListener('click', removeMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
      refs.body.classList.toggle('no-scroll');
    }
  
    function removeMenu() {
      refs.menu.classList.add('is-hidden');
    }
  })();