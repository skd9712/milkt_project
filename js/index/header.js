document.addEventListener("DOMContentLoaded", function () {
    // 학교 공부 메뉴
    let schoolMenuParent = document.querySelector('.menu_li:nth-child(2)');
    let schoolMenu = document.querySelector('.inner_school');

    schoolMenuParent.addEventListener('mouseover', function () {
        schoolMenu.classList.add('show');
    });

    schoolMenuParent.addEventListener('mouseout', function () {
        schoolMenu.classList.remove('show');
    });

    // 수준별 메뉴
    let levelMenuParent = document.querySelector('.menu_li:nth-child(3)');
    let levelMenu = document.querySelector('.inner_level');

    levelMenuParent.addEventListener('mouseover', function () {
        levelMenu.classList.add('show');
    });

    levelMenuParent.addEventListener('mouseout', function () {
        levelMenu.classList.remove('show');
    });

    // 햄버거 버튼 클릭 시 메뉴 토글
    let navbarToggleBtn = document.querySelector('.navbar_toggleBtn');
    let navbarMenu = document.querySelector('.navbar_menu');
    let icon = document.querySelector('.navbar_icon');

    navbarToggleBtn.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
        icon.classList.toggle('active');
    });
});

// section 41
const SHOWING_CLASS = 'showing';
const firstSlide = document.querySelector('.fist_review');

function reviewSlide() {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if (currentSlide) {
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        if(nextSlide) {
            nextSlide.classList.add(SHOWING_CLASS);
        } else {
            firstSlide.classList.add(SHOWING_CLASS);
        }
    } else {
        firstSlide.classList.add(SHOWING_CLASS);
    }
}

reviewSlide();
setInterval(reviewSlide, 3000)
//setInterval(reviewSlide, 100);

