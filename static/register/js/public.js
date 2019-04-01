// 居中 
function divCenter(objdig) {  
    var screenWidth = jQuery(window).width(), screenHeight = jQuery(window).height(); //当前浏览器窗口的 宽高 
    var scrolltop = jQuery(document).scrollTop(); //获取当前窗口距离页面顶部高度 
    var objLeft = (screenWidth - objdig.width()) / 2;
    var objTop = (screenHeight - objdig.height()) / 2 + scrolltop;
    objdig.css({ left: objLeft + 'px', top: objTop + 'px' });
    //浏览器窗口大小改变时 
    jQuery(window).resize(function () {
        screenWidth = jQuery(window).width();
        screenHeight = jQuery(window).height();
        scrolltop = jQuery(document).scrollTop();
        objLeft = (screenWidth - objdig.width()) / 2;
        objTop = (screenHeight - objdig.height()) / 2 + scrolltop;
        objdig.css({ left: objLeft + 'px', top: objTop + 'px' });
    });
    //浏览器有滚动条时的操作 
    jQuery(window).scroll(function () {
        screenWidth = jQuery(window).width();
        screenHeight = jQuery(window).height();
        scrolltop = jQuery(document).scrollTop();
        objLeft = (screenWidth - objdig.width()) / 2;
        objTop = (screenHeight - objdig.height()) / 2 + scrolltop;
        objdig.css({ left: objLeft + 'px', top: objTop + 'px' });
    });
}


function isPhone(phone) {
    var reg = /^1[34578]{1}[0-9]{9}$/;
    return reg.test(phone);
}



