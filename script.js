function menuShow() {
    const menuMobile = document.querySelector('.mobile-menu');
    const icon = document.querySelector('.icon');

    if (menuMobile && icon) {
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
            icon.src = "./img/menu_white_36dp.svg";
        } else {
            menuMobile.classList.add('open');
            icon.src = "./img/close_white_36dp.svg";
        }
    }
}
