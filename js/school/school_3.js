"use strict"

/* 내부 내비게이션 */
let listicon = document.querySelectorAll('.tabNav li');

listicon.forEach(item => {
    item.addEventListener('mouseover', function () {
        item.classList.add('on');
    });

    item.addEventListener('mouseout', function () {
        item.classList.remove('on');
    });
});

/* 스크롤 애니메이션 up */
let saTriggerMargin = 300;
let saElementList = document.querySelectorAll('.up');

let saFunc = function () {
    for (let element of saElementList) {
        if (!element.classList.contains('show')) {
            if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
                element.classList.add('show');
            }
        }
    }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);

/* top 버튼 */
let btnScrollToTop = document.querySelector('.top');

btnScrollToTop.addEventListener('click', function () {

    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    });
});

/* 무료체험 팝업창 */
// 팝업 클릭햘 때
function openPopup() {
    let popup = document.getElementById('popup');
    popup.style.visibility = 'visible';
    popup.style.opacity = '1';
}
// 팝업 닫을 때
function closePopup() {
    let popup = document.getElementById("popup");
    popup.style.visibility = "hidden";
    popup.style.opacity = '0';
}

