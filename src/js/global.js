document.addEventListener('DOMContentLoaded', function () {

    lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgZoom, lgThumbnail],
        licenseKey: 'your_license_key',
        speed: 500,
    });

    function blockSlide() {

        let bolckDescr = document.querySelector('.block-wrap-v2');

        if (typeof (bolckDescr) != 'undefined' && bolckDescr != null) {
            let blockItem = document.querySelectorAll('.block-item');

            blockItem.forEach(item => {
                let descr = item.querySelector('.block-item__descr');
                let descrHeight = descr.scrollHeight;

                item.addEventListener('mouseenter', function () {
                    descr.style.maxHeight = descrHeight + 'px';
                    item.classList.add('active');
                });

                item.addEventListener('mouseleave', function () {
                    descr.style.maxHeight = 0;
                    setTimeout(function () {
                        item.classList.remove('active');
                    }, 300);
                });
            });
        }
    }

    blockSlide();



    function navSlide() {

        let trigger = document.querySelector('.page-nav-mob__trigger');
        let nav = document.querySelector('.page-nav');
        let navHeight = nav.scrollHeight;

        trigger.addEventListener('click', function () {
            if (!this.classList.contains('active')) {
                nav.style.maxHeight = navHeight + 'px';
                nav.classList.add('active');
                this.classList.add('active');
            } else {
                nav.style.maxHeight = 0;
                nav.classList.remove('active');
                this.classList.remove('active');
            }
        });
    }

    navSlide();


    const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
        const header = document.querySelector(headerSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);

        function hideTabContent() {
            content.forEach(item => {
                item.style.display = 'none';
            });

            tab.forEach(item => {
                item.classList.remove(activeClass);
            });
        }

        function showTabContent(i = 0) {
            content[i].style.display = display;
            tab[i].classList.add(activeClass);
        }

        hideTabContent();
        showTabContent();

        header.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target;
            if (target &&
                (target.classList.contains(tabSelector.replace(/\./, "")) ||
                    target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    };

    tabs('.tab-link-wrapper', '.tab', '.tabs-content', 'tab-active');



    function tabDoc() {
        let btn = document.querySelectorAll('.tabs-doc__btn--trigger');
        btn.forEach(item => {
            item.addEventListener('click', function () {
                this.classList.toggle('active');
                let form = this.parentElement.querySelector('.tabs-doc-form');
                form.classList.toggle('active');
            });
        });

    }
    tabDoc();







});