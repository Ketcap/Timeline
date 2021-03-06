$(document).ready(function () {

    $(".t-row > div:nth-child(2)").each(function () {
        prev = $(this).prev();
        prevHeight = prev.height();
        $(this).css({
            marginTop: prevHeight / 2,
        })
    })

    $(".t-row:last-child > div:nth-child(2)").css({
        marginBottom: $(".t-row:last-child > div:nth-child(2)").height() * 0.50,
    })

    function isInView(ele) {
        var $ele = $(ele);
        var $window = $(window);

        var ViewTop = $window.scrollTop();
        var ViewBottom = ViewTop + $window.height();

        var eleTop = $ele.offset().top;
        var eleBottom = eleTop + $ele.height();
        var eleCenter = (eleTop + eleBottom) / 2 ;
        
        return ( eleCenter > ViewTop && eleCenter < ViewBottom )
    }

    function changeEase(element, ease, animSpeed) {
        $element = $(element);
        allin = "all " + animSpeed + "ms " + ease;
        $element.css({
            WebkitTransition: allin,
            MozTransition: allin,
            MsTransition: allin,
            OTransition: allin,
            transition: allin,
        });
    }

    function showElements() {
        $(".t-row > div").each(function () {
            _this = $(this);
            if (isInView(_this)) {
                changeEase(_this, "cubic-bezier(0.175, 0.885, 0.320, 1.275)", 600)
                _this.css({
                    "-ms-transform": "scale(1)",
                    /* IE 9 */
                    "-webkit-transform": "scale(1)",
                    /* Safari */
                    "transform": "scale(1)",
                })
            } else {

                changeEase(_this, "cubic-bezier(0.680, -0.550, 0.265, 1.550)", 600)
                _this.css({
                    "-ms-transform": "scale(0)",
                    /* IE 9 */
                    "-webkit-transform": "scale(0)",
                    /* Safari */
                    "transform": "scale(0)",
                })
            }
        })
    }
    
    $(window).scroll(function () {
        showElements();
    })

})