(function(){
    var touchScroll = function() {
        var elements = document.getElementsByClassName('responsive-scroll-container'),
        scrollStartPosX = 0,
        i = 0;
        for (i; i < elements.length; i++) {
            elements[i].addEventListener("touchstart", function(event) {
                var target = event.currentTarget;
                scrollStartPosX = target.scrollLeft + event.touches[0].pageX;
            }, false);

            elements[i].addEventListener("touchmove", function(event) {
                var target = event.currentTarget;
                if ((target.scrollLeft < target.scrollWidth - target.offsetWidth && target.scrollLeft + event.touches[0].pageX < scrollStartPosX - 5) || (target.scrollLeft != 0 && target.scrollLeft + event.touches[0].pageX > scrollStartPosX + 5)) {
                    event.preventDefault();
                }
                target.scrollLeft = scrollStartPosX - event.touches[0].pageX;
            }, false);
        }
    },

    isAndroid2xDevice = function() {
        return navigator.userAgent.match(/Android 2/i) ? true : false;
    };

    if (isAndroid2xDevice()) {
        touchScroll();
    }
}());
