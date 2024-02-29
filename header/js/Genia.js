// 슬라이드
const slides = [
    {
        container: document.querySelector(".container_infant"),
        prevBtn: document.querySelector(".btn_prev"),
        nextBtn: document.querySelector(".btn_next")
    },
    {
        container: document.querySelector(".container_ele"),
        prevBtn: document.querySelector(".btn_prev2"),
        nextBtn: document.querySelector(".btn_next2")
    }
];

slides.forEach(slide => {
    slide.prevBtn.addEventListener('click', () => translateContainer(slide, 1));
    slide.nextBtn.addEventListener('click', () => translateContainer(slide, -1));
});

// 슬라이드 이동
function translateContainer(slide, direction) {
    const { container, prevBtn, nextBtn } = slide;
    const selectedBtn = (direction === 1) ? prevBtn : nextBtn;
    container.style.transition = '0.5s ease-in-out';
    container.style.transform = `translateX(${direction * (77 / 7)}%)`;
    container.ontransitionend = () => reorganizeEl(container, selectedBtn);
}

// 슬라이드 재구성
function reorganizeEl(container, selectedBtn) {
    container.removeAttribute('style');
    if (selectedBtn.classList.contains('prev')) {
        container.insertBefore(container.lastElementChild, container.firstElementChild);
    } else {
        container.appendChild(container.firstElementChild);
    }
}

// 자동 슬라이드 기능
function autoSlide() {
    setInterval(() => {
        slides.forEach(slide => translateContainer(slide, -1));
    }, 3500); // 3.5초마다 슬라이드 이동
}

autoSlide();

// 페이드
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 화면에 들어옴
                entry.target.classList.add("fade-in");
            } else {
                // 화면에서 나감
                entry.target.classList.remove("fade-in");
            }
        });
    },
    // 화면에서 해당 요소가 10% 이상 보일 경우 화면에 들어온 것으로 판단함
    { threshold: 0.05 }
);

// 관찰 대상 설정
const targetElements = document.querySelectorAll(".fade_wrap");
targetElements.forEach((element) => {
    observer.observe(element);

});