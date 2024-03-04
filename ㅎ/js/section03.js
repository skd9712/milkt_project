let slider = document.querySelector('.infinite_loop_slider');
let list = document.querySelector('.loop_list');
let items = document.getElementsByClassName('loop_item');

let lastSlider = items.length - 1;
let firstSlider = items[0]
let nowIndex = 0

function clone() {
    //let cloneSlide_first = items[0].cloneNode(true)
    let cloneSlide_first = items[0]
    list.append(cloneSlide_first);
    //list.appendChild(items[0].cloneNode(true)) // list의 가장 뒤에 item[0]에 cloneNode 붙임
}
itemsWidth = items[0].offsetWidth //items의 width만큼 이동하기.

let sliderrr = () => {
    for (let i=0; i<items.length; i++) {
        items[i].style.transform -= 'translateX(-160px)'
        items[i].style.animation = 'rolling 33s linear infinite'
    }
    clone();
}


// //기본 실행 함수
let setI = setInterval(sliderrr, 1000)

// 슬라이드에 마우스 올라가면 멈춤
list.addEventListener("mouseover", () => {
    clearInterval(setI);
});

// 슬라이드에서 마우스 내려가면 다시 시작함
list.addEventListener("mouseout", () => {
    setI = setInterval(sliderrr, 1000)
});


