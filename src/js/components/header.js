function toggleInfo() {
    const infoMob = document.querySelector('.info-mob');
    const headerContacts = document.querySelector('.header__contacts');

    infoMob.addEventListener('click', () => {
        infoMob.classList.toggle('active');
        headerContacts.classList.toggle('active');
    });


    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(headerContacts);
        const withinBoundaries2 = e.composedPath().includes(infoMob);

        if (!withinBoundaries && !withinBoundaries2) {
            infoMob.classList.remove('active');
            headerContacts.classList.remove('active');
        }
    });
}

function toggleMenu() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__bottom');
    const navBackground = document.querySelector('.header__bottom-bg');
    const closeNav = document.querySelector('.close-nav');

    burger.addEventListener('click', () => {
        burger.classList.add('active');
        nav.classList.add('active');
        navBackground.classList.add('active');
        closeNav.classList.add('active');

        document.body.classList.add('scroll-hide');
    });

    navBackground.addEventListener('click', () => {
        navBackground.classList.remove('active');
        nav.classList.remove('active');
        burger.classList.remove('active');
        closeNav.classList.remove('active');

        document.body.classList.remove('scroll-hide');
    });

    closeNav.addEventListener('click', () => {
        navBackground.classList.remove('active');
        nav.classList.remove('active');
        burger.classList.remove('active');
        closeNav.classList.remove('active');

        document.body.classList.remove('scroll-hide');
    });
}

function toggleNav() {
    const navList = document.querySelector('.nav__list');
    const navItems = document.querySelectorAll('.nav__item.active');
    const subnavItems = document.querySelectorAll('.subnav__item.active');
    const submenuItems = document.querySelectorAll('.submenu__item.active');

    navList.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('nav__item')) {
            navItems.forEach((item, i) => {
                if (target == item) {
                    item.querySelector('.nav__link').classList.toggle('open');

                    let list = document.querySelectorAll('.subnav');

                    if (list[i].classList.contains('active')) {
                        list[i].classList.remove('active');
                        list[i].style.maxHeight = 0;
                    } else {
                        list[i].classList.add('active');
                        list[i].style.maxHeight = list[i].scrollHeight + "px";
                    }
                }
            });
        }
        if (target && target.classList.contains('subnav__item')) {
            subnavItems.forEach((item, i) => {
                if (target == item) {
                    item.querySelector('.subnav__link').classList.toggle('open');

                    let list = document.querySelectorAll('.submenu');
                    let parent = item.parentNode;

                    if (list[i].classList.contains('active')) {
                        list[i].classList.remove('active');
                        list[i].style.maxHeight = 0;
                    } else {
                        list[i].classList.add('active');
                        list[i].style.maxHeight = list[i].scrollHeight + "px";

                        parent.style.maxHeight = parent.scrollHeight + list[i].scrollHeight + "px";
                    }
                }
            });
        }
        if (target && target.classList.contains('submenu__item')) {
            submenuItems.forEach((item, i) => {
                if (target == item) {
                    item.querySelector('.submenu__link').classList.toggle('open');

                    let list = document.querySelectorAll('.submenu-nested');
                    let parent = item.parentNode;

                    if (list[i].classList.contains('active')) {
                        list[i].classList.remove('active');
                        list[i].style.maxHeight = 0;
                    } else {
                        list[i].classList.add('active');
                        list[i].style.maxHeight = list[i].scrollHeight + "px";

                        parent.style.maxHeight = parent.scrollHeight + list[i].scrollHeight + "px";
                        parent.closest('.subnav').style.maxHeight = parent.closest('.subnav').scrollHeight + list[i].scrollHeight + "px";
                    }


                }
            });
        }
    });
}

function headerFixed() {
    const header = document.querySelector('.header');
    const headerTop = document.querySelector('.header__top');
    const page = document.querySelector('.page');

    page.style.paddingTop = header.scrollHeight + "px";

    window.addEventListener('scroll', function () {
        if (pageYOffset >= headerTop.scrollHeight && window.innerWidth >= 1024) {
            header.style.transform = `translateY(-${headerTop.scrollHeight}px)`;

        } else {
            header.style.transform = `translateY(${0}px)`;
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth <= 1023) {
            page.style.paddingTop = headerTop.scrollHeight + "px";
        } else {
            page.style.paddingTop = header.scrollHeight + "px";
        }
    });
}


toggleInfo();
toggleMenu();
toggleNav();
headerFixed();