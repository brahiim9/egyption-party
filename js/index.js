

/// <reference types="../@types/jquery" />



$(function () {

    let secondCount = document.querySelector('#secondCount');
    let minutes = document.querySelector('.minutes');
    let count = 60;

    let sidbarOuterWidth = $('.sidebar').outerWidth();
    $('.sidebar').animate({ marginLeft: `-${sidbarOuterWidth}` }, 300);
    $('.sidebarIcon').css({ marginLeft: '-20%' });


    function secondDown() {
        count--;

        secondCount.innerHTML = `${count} s`;
        if (count === 0) {
            count = 60;
        }
    }

    function minuteDown() {
        count--;

        minutes.innerHTML = `${count} m`;
        if (count === 0) {
            count = 60;
        }
    }
    setInterval(secondDown, 1000);
    setInterval(minuteDown, 60000);

    $('.sidebarIcon').on('click', function () {

        let left = $('.sidebar').css('marginLeft');

        if (left === '0px') {
            $('.sidebar').animate({ marginLeft: `-${sidbarOuterWidth}` }, 300);
            $('.sidebarIcon').css({ marginLeft: '-20%' });
        }
        else {
            $('.sidebar').animate({ marginLeft: `0px` }, 300);
            $('.sidebarIcon').css({ marginLeft: '0%' });
        }

    })

    $('#singers .headerOne').on('click', function () {
        $('.pragOne').slideToggle(400)
    })
    $('#singers .headerTwo').on('click', function () {
        $('.pragTwo').slideToggle(400)
    })
    $('#singers .headerThree').on('click', function () {
        $('.pragThree').slideToggle(400)
    })
    $('#singers .headerFour').on('click', function () {
        $('.pragFour').slideToggle(400)
    })
})

