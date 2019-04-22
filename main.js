// Determine if we're on a mobile device


window.timeoutTimer = window.setTimeout(function reset() {
    console.log("timed out")
    swiper.slideTo(0, 0);
    window.hideNav();
}, TIMEOUT_SECS * 1000);

window.showNav = function () {
    document.querySelector('.nav-buttons').className = "nav-buttons fade-in";
}

window.hideNav = function () {
    document.querySelector('.nav-buttons').className = "nav-buttons fade-out";
}

var swiper = new Swiper('.swiper-container', {
    virtual: {
        slides: (function () {
            var slides = [];
            slides.push(document.querySelector('#intro').innerHTML)
            for (var i = 1; i <= 150; i += 1) {
                url = "img/" + i + ".png"
                slides.push("<img src=\"" + url + "\">");
            }
            slides.push(document.querySelector('#about').innerHTML)
            return slides;
        }()),
    },

    on: {
        init: function () {
            document.querySelector('.swiper-container').addEventListener('touchstart', function (e) {
                e.preventDefault();
            });
            document.querySelector('.swiper-wrapper').addEventListener('touchstart', function (e) {
                e.preventDefault();
            });
        },
        tap: function (e) {
            if (e.sourceCapabilities.firesTouchEvents)
            {
                window.showNav();
            }
            else
            {
                swiper.slideNext(0);
            }
        },
        sliderMove: function () {
            window.hideNav();
        },
        slideChange: function () {
            document.querySelector('#btn_start').className = ""
            document.querySelector('#btn_one').className = ""
            document.querySelector('#btn_other').className = ""
            document.querySelector('#btn_meeting').className = ""
            document.querySelector('#btn_chaos').className = ""
            document.querySelector('#btn_calm').className = ""
            document.querySelector('#btn_about').className = ""

            if (this.activeIndex == 0) {
                document.querySelector('#btn_start').className = "current"
            }
            if (this.activeIndex >= 1 && this.activeIndex < 31) {
                document.querySelector('#btn_one').className = "current"
            }
            if (this.activeIndex >= 31 && this.activeIndex < 61) {
                document.querySelector('#btn_other').className = "current"
            }
            if (this.activeIndex >= 61 && this.activeIndex < 91) {
                document.querySelector('#btn_meeting').className = "current"
            }
            if (this.activeIndex >= 91 && this.activeIndex < 121) {
                document.querySelector('#btn_chaos').className = "current"
            }
            if (this.activeIndex >= 121 && this.activeIndex < 151) {
                document.querySelector('#btn_calm').className = "current"
            }
            if (this.activeIndex >= 151) {
                document.querySelector('#btn_about').className = "current"
            }

            // invalidate the timeout
            if (timeoutTimer) {
                window.clearTimeout(window.timeoutTimer)
                window.timeoutTimer = window.setTimeout(function reset() {
                    console.log("timed out")
                    swiper.slideTo(0, 0);
                }, TIMEOUT_SECS * 1000);
            }
        }
    }
});

document.addEventListener('keyup', function (e) {
    switch (e.key) 
    {
        case "ArrowLeft":
            e.preventDefault();
            window.hideNav();
            swiper.slidePrev(200);
            break;
        case "ArrowRight":
            e.preventDefault();
            window.hideNav();
            swiper.slideNext(200);
            break;
        case " ":
            e.preventDefault();
            window.hideNav();
            swiper.slideNext(0);
            break;
        case "Home":
            e.preventDefault();
            window.hideNav();
            swiper.slideTo(0, 0);
            break;        
    }
});

document.querySelector('#btn_start').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(0, 0);
});

document.querySelector('#btn_one').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(1, 0);
});
document.querySelector('#btn_other').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(31, 0);
});
document.querySelector('#btn_meeting').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(61, 0);
});
document.querySelector('#btn_chaos').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(91, 0);
});
document.querySelector('#btn_calm').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(121, 0);
});
document.querySelector('#btn_about').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(151, 0);
});
