// 최상단 이동 버튼(부드럽게 이동)
const $topbtn = document.querySelector(".btnTop");

$topbtn.onclick = () => {
    window.screenTo({top: 0, behavior: "smooth"});
}
// 스크롤 애니메이션
window.addEventListener('scroll', function () {
    let elements = document.querySelectorAll('.fade-in');

    elements.forEach(function (element) {
        let position = element.getBoundingClientRect();

        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});