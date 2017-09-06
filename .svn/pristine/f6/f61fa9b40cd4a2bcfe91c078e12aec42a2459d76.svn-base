/**
 * Created by Zora Tao on 2016/4/25.
 *
 * Please backup before modification
 * 修改前请备份
**/

    ///////// 弹窗封装 /////////(JS-practice.html)
    //显示
    $.fn.dialogShow = function(){
        this.fadeIn();
        return this;
    };
    //隐藏
    $.fn.dialogHide = function(){
        this.fadeOut();
        return this;
    };
    //居中
    $.fn.center = function () {
        this.css({
            "position" :"fixed",
            "top" : 50 + "%",
            "marginTop" : ("-" + this.height() / 2) + "px",
            "left" : ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px"
        });
        return this;
    };

