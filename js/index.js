$(function(){
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'sectionsColor': ['#254875', '#fff', '#254587', '#695684'],
        anchors: ['page1','page2','page3','page4','page5','page6','page7','page8','page9','page10'],
        'navigation': true,
        'navigationPosition': 'right',
        // 'navigationColor':'#8B9FA9',
        'navigationTooltips':['首页','视觉','交互','皮肤','功能','待办邮件','联系人邮件','科技','连接易信','马上体验']
    })
    $(".phone").hover(function(){
        $(".phone-slide").show();
    },function(){
        $(".phone-slide").hide();
    })
    $("#fp-nav").css({marginTop:-155})
})