"use strict"

// 내부 메뉴바 마우스 오버
let listicon = document.querySelectorAll('.tabNav li');

listicon.forEach(item => {
    item.addEventListener('mouseover', function() {
        item.classList.add('on');
    });
    item.addEventListener('mouseout', function() {
        item.classList.remove('on');
    });
    item.addEventListener('keyup', function() {
        item.classList.add('on');
    });
    item.addEventListener('keydown', function() {
        item.classList.remove('on');
    });
});


function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
}
function handleScroll() {
    const elems = document.querySelectorAll(".up_on_scroll");

    elems.forEach(elem => {
        if (isElementUnderBottom(elem, -300)) {
            elem.style.opacity = '0.5';
            elem.style.transform = 'translateY(30px)';
            elem.classList.remove('active');
        } else {
            elem.style.opacity = '1';
            elem.style.transform = 'translateY(0px)';
            elem.classList.add('active');
        }
    });
}

// 위로가기
window.addEventListener('scroll', handleScroll);


const $topbtn = document.querySelector(".btnTop");

$topbtn.onclick = () => {
    window.screenTo({top: 0, behavior: "smooth"});
}

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