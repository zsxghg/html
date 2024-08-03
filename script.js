$(function () {
    //滑動至指定位置
    $('.menu a').click(function () {
        var btn = $(this).attr('href');
        //attr 抓取某個屬性的值
        var pos = $(btn).offset();
        //offset 抓座標位置
        $('html, body').animate({ scrollTop: pos.top }, 1000);
        //動畫
    });
});

