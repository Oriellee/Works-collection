$(function() {
    $("#title>li>p").hover(function() {
        $(this).css({
            'background-color': '#4CAF50',
            "color": '#fff',
            "border-bottom": "none"
        });
        $(this).stop(true, true).animate({ paddingLeft: "5%" }, 200);

    }, function() {
        $(this).css({
            'background-color': '#fff',
            "color": '#333',
            "border-bottom": "1px solid #333"
        });
        $(this).stop(true, true).animate({ paddingLeft: "" }, 0);
    });
    $("#title>li").click(function(event) {
        var checkButton = $(this).children('.content').css("display");
        if (checkButton == "block") {
            $(this).children('.content').hide(400);
        } else {
            $(this).children('.content').show(400);
            $(this).siblings().children('.content').hide(400);
        }
    });
    $(".content>li").hover(function() {
    	$(this).css({
            'background-color': '#29B6F6',
            "border-bottom": "none"
        });
        $(this).children('a').css('color', '#fff');
        $(this).stop(true, true).animate({ paddingLeft: "5%" }, 200);
    }, function() {
        $(this).css({
            'background-color': '#fff',
            "border-bottom": "1px solid #eee"
        });
        $(this).children('a').css('color', '#333');
        $(this).stop(true, true).animate({ paddingLeft: "" }, 0);
    });
});
