// let toggleBtn = document.querySelector('.navbar_toggleBtn');
// let menu = document.querySelector('.navbar_menu');
// let icon = document.querySelector('.navbar_icon');
//
// toggleBtn.addEventListener('click', () => {
//     menu.classList.toggle('active');
//     icon.classList.toggle('active');
// });

document.addEventListener("DOMContentLoaded", function () {
    // "학교 공부" 메뉴의 하위 메뉴 토글
    let schoolMenuParent = document.querySelector('.menu_li:nth-child(2)');
    let schoolMenu = document.querySelector('.inner_school');

    schoolMenuParent.addEventListener('click', function (event) {
        event.preventDefault();
        schoolMenu.classList.toggle('show');
    });

    // "수준별 국 영 수" 메뉴의 하위 메뉴 토글
    let levelMenuParent = document.querySelector('.menu_li:nth-child(3)');
    let levelMenu = document.querySelector('.inner_level');

    levelMenuParent.addEventListener('click', function (event) {
        event.preventDefault();
        levelMenu.classList.toggle('show');
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
