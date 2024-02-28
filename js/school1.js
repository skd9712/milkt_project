"use strict"

let listicon = document.querySelectorAll('.tabNav li');

listicon.forEach(item => {
    item.addEventListener('mouseover', function() {
        item.classList.add('on');
    });

    item.addEventListener('mouseout', function() {
        item.classList.remove('on');
    });
});


