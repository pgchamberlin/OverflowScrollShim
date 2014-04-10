(function(){
    if (isAndroid2xDevice()) touchScroll();

    var scrollStartPosX = 0;

    function touchScroll() {
        var elements = document.getElementsByClassName("responsive-scroll-container");
        var len      = elements.length;
        var counter  = 0;

        while (counter < len) {
            elements[i].addEventListener("touchstart", handleTouchStart, false);
            elements[i].addEventListener("touchmove",  handleTouchMove,  false);
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
        target.scrollLeft < target.scrollWidth - target.offsetWidth && target.scrollLeft + event.touches[0].pageX < scrollStartPosX - 5
    }

    function reachedEndFor (target, event) {
        target.scrollLeft != 0 && target.scrollLeft + event.touches[0].pageX > scrollStartPosX + 5
    }

    function isAndroid2xDevice() {
        return navigator.userAgent.match(/Android 2/i) ? true : false;
    }
}());
