$(document).ready(function(){

    $(".t-row > div:nth-child(2)").each(function(){
        prev = $(this).prev();
        prevHeight = prev.height();
        $(this).css({
            marginTop:prevHeight/2,
        })
        
    })
    
    $(".t-row:last-child > div:nth-child(2)").css({
        marginBottom: $(".t-row:last-child > div:nth-child(2)").height()*0.50,
    })

    function isScrolledIntoView(ele)
    {
        var $ele = $(ele);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var eleTop = $ele.offset().top;
        var eleBottom = eleTop + $ele.height();

        return ((docViewTop < eleTop) && (docViewBottom > eleBottom));
        /*return ((eleBottom <= docViewBottom) && (eleTop >= docViewTop));*/
    }
    function showElements(){
        $(".t-row > div").each(function(){
            _this = $(this);
            if(isScrolledIntoView(_this))
            {
                _this.css({
                "-ms-transform": "scale(1)", /* IE 9 */
                "-webkit-transform": "scale(1)", /* Safari */
                "transform": "scale(1)",
                })
            }
            else{
                _this.css({
                   "-ms-transform": "scale(0)", /* IE 9 */
               "-webkit-transform": "scale(0)", /* Safari */
                "transform": "scale(0)",
                })
            }
        })
    }
    showElements();
    $(window).scroll(function(){
        showElements();
    })
    
})