(function(){
    var scrollStartPosX = 0;

    function touchScroll() {
        var elements = document.getElementsByClassName('responsive-scroll-container'),
        i = 0;
        for (i; i < elements.length; i++) {
            elements[i].addEventListener("touchstart", handleTouchStart, false);
            elements[i].addEventListener("touchmove", handleTouchMove, false);
        }
    }

    function handleTouchStart (event) {
        scrollStartPosX = event.currentTarget.scrollLeft + event.touches[0].pageX;
    }

    function handleTouchMove (event) {
        var target = event.currentTarget;
        if ((target.scrollLeft < target.scrollWidth - target.offsetWidth && target.scrollLeft + event.touches[0].pageX < scrollStartPosX - 5) || (target.scrollLeft != 0 && target.scrollLeft + event.touches[0].pageX > scrollStartPosX + 5)) {
            event.preventDefault();
        }
        target.scrollLeft = scrollStartPosX - event.touches[0].pageX;
    }

    function isAndroid2xDevice() {
        return navigator.userAgent.match(/Android 2/i) ? true : false;
    }

    if (isAndroid2xDevice()) touchScroll();
}());
