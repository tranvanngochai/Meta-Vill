new WOW().init();



var homepageHeader = document.querySelector('.homepage-header');
var toggle = document.querySelector('.mobile-toggle');

let ourpartnersItem = document.querySelectorAll(".ourpartners-listitem__item");
ourpartnersItem.forEach(function (item) {
    item.classList.add("wow", "flipInY")
    item.setAttribute("data-wow-duration", "1.5s");
})

let advisorItem = document.querySelectorAll(".advisor-slider .box");
advisorItem.forEach(function (item) {
    item.classList.add("wow", "flipInY")
    item.setAttribute("data-wow-duration", "2s");
})


let ourteamItem = document.querySelectorAll(".ourteam-slider .box");
ourteamItem.forEach(function (item) {
    item.classList.add("wow", "flipInY")
    item.setAttribute("data-wow-duration", "2s");
})

let roadmapText = document.querySelectorAll(".roadmap-container .roadmap-item__text");
roadmapText.forEach(function (item) {
    item.classList.add("wow", "flip")
    item.setAttribute("data-wow-duration", "1.5s");
})
let roadmapMonths = document.querySelectorAll(".roadmap-container .roadmap-item__months");
roadmapMonths.forEach(function (item) {
    item.classList.add("wow", "flipInX")
    item.setAttribute("data-wow-duration", "1.5s");
})

let articlesItem = document.querySelectorAll(".articles-item");
articlesItem.forEach(function (item) {
    item.classList.add("wow", "flipInY")
    item.setAttribute("data-wow-duration", "2s");
})


// Loading page
$(window).on('load', function () {
    $('.loader').hide();
})


// Hover mouse menu
function hoverMouse(item) {
    item.classList.add("hovermouse")
}

function hoverMouseOut(item) {
    item.classList.remove("hovermouse")
}





window.addEventListener('DOMContentLoaded', function () {


    // Menu mobile
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        homepageHeader.classList.toggle('active');
    })

    // Click menu mobile 
    document.querySelectorAll(".nav-list__item").forEach(el => {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            homepageHeader.classList.remove('active');
            toggle.classList.remove('active')

        });
    });


    // scroll length item >= 5
    let itemLink = document.querySelectorAll(".marketplace-listitems__link");
    let marketplaceListItem = document.querySelector(".marketplace-listitems");
    if (itemLink.length >= 5) {
        marketplaceListItem.style.overflowY = "scroll";
    }



    // Remove slider screen moblie

    let swiper = document.querySelector(".articles-listitem");
    let wrapper = swiper.querySelector(".articles-wrapper");
    let swiperSlide = wrapper.querySelectorAll(".articles-item");
    console.log(window.screen.width);
    if (window.screen.width <= 576) {
        swiper.classList.remove('swiper');
        wrapper.classList.remove('swiper-wrapper');
        swiperSlide.classList.remove('swiper-slide');

    }



    // scroll menu active

    const sections = document.querySelectorAll(".template__section");
    const listItem = document.querySelectorAll(".header-nav .nav-list .nav-list__item");

    const makeActive = (item) => listItem[item].classList.add("active");
    const removeActive = (item) => listItem[item].classList.remove("active");
    const removeAllActive = () => [...Array(sections.length).keys()].forEach((item) => removeActive(item));

    const sectionMargin = 200;

    let currentActive = 0;

    window.addEventListener("scroll", () => {
        const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1

        if (current !== currentActive) {
            removeAllActive();
            currentActive = current;
            makeActive(current);
        }
    });


}, false);



// Click scroll menu
$(document).ready(function (event) {
    $("a[href*='#']:not([href='#])").click(function () {
        let target = $(this).attr("href");
        $('html,body').stop().animate({
            scrollTop: $(target).offset().top
        }, 500);
    });


    // Play video
    $(".marketplace-slider__item--click").click(function () {
        console.log('Đã click');
        $(this).parents(".marketplace-slider__item").find("[class*='video-play-']").attr('src', function (index, src) {
            if (!src.includes('autoplay=1'))
                return src + "?autoplay=1";
            return src;
        })
    });

});









// Slider

var marketplaceSlider = new Swiper(".marketplace-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



var marketplaceBox = new Swiper(".marketplace-box", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});


var enjoytoearn = new Swiper(".branch-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },


});


var backer = new Swiper(".backer-caption", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },


});


var articles = new Swiper(".articles-listitem", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1366: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },


});



var advisor = new Swiper(".advisor-slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 2,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        375: {
            slidesPerView: 1.3,
            spaceBetween: 10,
        },
        414: {
            slidesPerView: 1.3,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1366: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },


});



var ourteam = new Swiper(".ourteam-slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 2,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        375: {
            slidesPerView: 1.3,
            spaceBetween: 10,
        },
        414: {
            slidesPerView: 1.3,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1366: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },


});







// $(document).ready(function () {
//     (function ($) {
//         var methods = ['addClass', 'toggleClass', 'removeClass'];

//         $.each(methods, function (index, method) {
//             var originalMethod = $.fn[method];

//             $.fn[method] = function () {
//                 var oldClass = this[0].className;
//                 var result = originalMethod.apply(this, arguments);
//                 var newClass = this[0].className;

//                 this.trigger(method, [oldClass, newClass]);
//                 return result;
//             };
//         });
//     }(window.jQuery || window.Zepto));

//     $(".enjoytoearn .branch-click").on('addClass', function (e, oldClass, newClass) {
//         // $('.imag p').removeClass('active');
//         // $('.image [data-slide-to="'+$(this).data('slide-to')+'"]'). addClass('active');
//         var index = $(this).data('target');
//         var brack = $('.enjoytoearn .swiper-pagination span');
//         console.log(brack);
//         $('.enjoytoearn .swiper-pagination span').removeClass('swiper-pagination-bullet-active');

//         $(".enjoytoearn .swiper-pagination span").eq(index).addClass('swiper-pagination-bullet-active');

//     })
// })



// synchronized dot slider

$('.enjoytoearn .branch-click').click(function (e) {
    var index = $(this).data('target');
    $('.enjoytoearn .branch-click').not(this).removeClass('active');
    $(this).addClass('active');
    $(".enjoytoearn .swiper-pagination span").eq(index).trigger("click");
});
$(".enjoytoearn .swiper-pagination span").click(function () {
    var index = $(this).index();
    $('.enjoytoearn .branch-click').removeClass('active');
    $('.enjoytoearn .branch-click[data-target="' + index + '"]').addClass('active');
});


