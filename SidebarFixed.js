/*  SidebarFixed         */
/*  author :  LF@Flora  */
/*  version: 1.0.1     */


$.fn.SidebarFixed = function(){
    var $_this = $(this),
    sideHeight = $_this.height(),//侧边栏高度
    windowHeight;
    $(window).scroll(function() {
        windowHeight = $(window).scrollTop() + $(window).height();//滚动的高度+屏幕的高度
        _if();
    });
    function _if(){
        if (windowHeight > sideHeight) {//滚动的高度+屏幕的高度 大于 侧边栏高度时
        $_this.css({
                'position' : 'fixed',
                'right' : '0px',
                'top' : -(sideHeight - $(window).height())
            });
        } else {
            $_this.css({
                'position' : 'static'
            });
        }
    }
}
