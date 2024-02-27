const $topbtn = document.querySelector(".btnTop");

$topbtn.onclick=()=>{
    window.screenTo({top:0,behavior:"smooth"});
}