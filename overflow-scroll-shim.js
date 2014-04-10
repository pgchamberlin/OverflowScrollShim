(function(){
    if (isAndroid2xDevice()) {
        registerTouchScrollX();
    }

    var scrollStartPosX = 0;

    function registerTouchScrollX() {
        var elements = document.getElementsByClassName("responsive-scroll-container");
        var len      = elements.length;
        var counter  = 0;

        while (counter < len) {
            elements[counter].addEventListener("touchstart", handleTouchStart, false);
            elements[counter].addEventListener("touchmove",  handleTouchMove,  false);
            counter++;
        }
    }

    function handleTouchStart (event) {
        scrollStartPosX = event.currentTarget.scrollLeft + event.touches[0].pageX;
    }

    function handleTouchMove (event) {
        var target = event.currentTarget;

        if (reachedStartFor(target, event) || reachedEndFor(target, event)) {
            event.preventDefault();
        }

        target.scrollLeft = scrollStartPosX - event.touches[0].pageX;
    }

    function reachedStartFor (target, event) {
        return target.scrollLeft < target.scrollWidth - target.offsetWidth && target.scrollLeft + event.touches[0].pageX < scrollStartPosX - 5;
    }

    function reachedEndFor (target, event) {
        return target.scrollLeft != 0 && target.scrollLeft + event.touches[0].pageX > scrollStartPosX + 5;
    }

    function isAndroid2xDevice() {
        return navigator.userAgent.match(/Android 2/i) ? true : false;
    }
}());
