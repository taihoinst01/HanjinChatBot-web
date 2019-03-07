$(function () {
    //채팅 위에서부터 내려오기
    $('.wc-message-group-content').css({ 'margin-top': 0 });

    $('#wrapper').css({ 'height': ($(document).height()) + 'px' });
    
    $(window).resize(function () {
        $('.wc-carousel').css({ 'width': ($(document).width()-74) + 'px' });
        $('.tooltip').tooltip('show');
    });

    //tooltip
    $('.wc-menu').attr('data-toggle', 'tooltip').attr('data-placement','top').attr('title','바로가기')
    .attr('data-template','<div class="tooltip tool2" role="tooltip"><div class="tooltip-arrow arrow2"></div><div class="tooltip-inner"></div></div>').tooltip('show');

    //챗봇창 상단 생성
    $(".wc-header > span").add(
        "<span class='chatTitle'></span>"
    ).appendTo(".wc-header");

    //챗봇 SAP Btn 생성
    $(".wc-chatview-panel > div").add(
        "<div class='sapBtn off'>" +
    "</div > ").appendTo(".wc-chatview-panel");

    //챗봇 Menu 생성
    $(".wc-console > div").add(
        "<div class='menuBox off'>" +
            "<ul type='none'>" +
            "<li class='menuSelectBtn'>총무</li>" +
            "<li class='menuSelectBtn'>인사</li>" +
            "<li class='menuSelectBtn'>재무</li>" +
            "<li class='menuSelectBtn'>IT</li>" +
            "<li class='menuSelectBtn'>법무</li>" +
            "<li class='menuSelectBtn'>CSV</li>" +
            "<li class='menuSelectBtn'>블로썸파크</li>" +
            "<li class='menuSelectBtn'>하고싶은말</li>" +
            "</ul>" +
        "</div > ").appendTo(".wc-console");

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    //챗봇 menu 선택
    $('.menuSelectBtn').click(function () {
        var v = $(this).html();
        if(v == '하고싶은말'){v = '건의사항 입력';}
        else{v = v + ' 선택';}
        $('div.wc-console').addClass('has-text');
        $('input[type="text"].wc-shellinput').attr('value', v).val(v);
        $('label.wc-send').trigger('click');
        $('input[type="text"].wc-shellinput').attr('value', '').val('');
        $('.wc-console').removeClass('has-text').animate({ 'bottom': 10 + 'px' }, 'fast');
        $('.menuIcon_active').removeClass('menuIcon_active').addClass('menuIcon');
        $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
        $('.wc-message-groups').removeClass('menuboxOn').addClass('menuboxOff').scrollTop($('.wc-message-group-content')[0].scrollHeight);
    });
    //menu 이외의 다른 영역 선택시 닫힘
    $('.wc-message-groups').click(function () {
        if ($('.menuBox').hasClass('on')) {
            $('.wc-console').animate({ 'bottom': 10 + 'px' }, 'fast');
            $('.menuIcon_active').removeClass('menuIcon_active').addClass('menuIcon');
            $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
            $('.wc-message-groups').removeClass('menuboxOn').addClass('menuboxOff').scrollTop($('.wc-message-group-content')[0].scrollHeight);
        }
    });

    //SAP 버튼 동작
    $('.sapIcon').click(function () {
        if ($('.menuBox').hasClass('on')) {
            $('.wc-console').animate({ 'bottom': 10 + 'px' }, 'fast');
        }
        $('.menuIcon').removeClass('menuIcon').addClass('sapIcon-close');
        $('.menuIcon_active').removeClass('menuIcon_active').addClass('sapIcon-close');
        $('.sapIcon').removeClass('sapIcon').addClass('sapIcon-search');
        $('.wc-sap').removeClass('off').addClass('on').css({ 'display': 'block' });
        $('.sapBtn').removeClass('off').addClass('on');
        $('.wc-textbox').animate({ 'left': 40 + 'px' }, 'fast');
        $('.wc-shellinput').attr('placeholder', '용어검색 (일반문의는 x표)').focus();
        $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
        $('.wc-message-groups').removeClass('menuboxOn').addClass('menuboxOff').scrollTop($('.wc-message-group-content')[0].scrollHeight);

    });
    //챗봇 MENU + SAP 버튼 동작
    $('.wc-menu > div').click(function () {
        $('.wc-shellinput').attr('value', '').attr('placeholder', '용어검색은 " # " 을 눌러 질문하세요 →').val('');
        if ($(this).hasClass('menuIcon')) {     //MENU 열기
            $('.wc-menu').tooltip('destroy'); //메뉴 선택시 tooptip삭제
            $('.wc-console').animate({ 'bottom': 115 + 'px' }, 'fast');
            $('.menuBox').removeClass('off').addClass('on').css({ 'display': 'block' });
            $('.menuIcon').removeClass('menuIcon').addClass('menuIcon_active');
            $('.sendIcon').removeClass('sendIcon').addClass('sapIcon');
            $('.wc-message-groups').removeClass('menuboxOff').addClass('menuboxOn');
        } else if ($(this).hasClass('menuIcon_active')) {   //MENU 닫기
            $('.wc-message-groups').removeClass('menuboxOn').addClass('menuboxOff');
            $('.menuIcon_active').removeClass('menuIcon_active').addClass('menuIcon');
            $('.sendIcon').removeClass('sendIcon').addClass('sapIcon');
            $('.wc-console').animate({ 'bottom': 10 + 'px' }, 'fast');
            $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
        } else if ($(this).hasClass('sapIcon-close')) {    //SAP 닫기
            $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
            $('.sapIcon-close').removeClass('sapIcon-close').addClass('menuIcon');
            $('.wc-sap').removeClass('on').addClass('off').css({ 'display': 'none' });
            $('.sapIcon-search').removeClass('sapIcon-search').addClass('sapIcon');
            $('.sapBtn').removeClass('on').addClass('off');
            $('.wc-textbox').animate({ 'left': 15 + 'px' }, 'fast');
        }
        $('.wc-message-groups').scrollTop($('.wc-message-group-content')[0].scrollHeight);
    });

    //SAP 아니고 문자 입력시 SEND버튼
    $('.wc-shellinput').keyup(function () {
        $('.wc-send').tooltip('destroy'); //key입력시 tooptip삭제
        if ($('.sapBtn').hasClass("off") && $(this).val() != '') {
            $('.sapIcon').removeClass('sapIcon').addClass('sendIcon');
            $('.wc-shellinput').css({ 'color': '#555' });
        } else {
            $('.sendIcon').removeClass('sendIcon').addClass('sapIcon');
            $('.wc-shellinput').css({ 'color': '#326E9B' });
        }
        $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
        $('.menuIcon_active').removeClass('menuIcon_active').addClass('menuIcon');
        $('.wc-message-groups').scrollTop($('.wc-message-group-content')[0].scrollHeight);
    });
    $('.wc-shellinput').click(function () {
        if ($('.menuBox').hasClass('on')) {
            $('.menuIcon_active').removeClass('menuIcon_active').addClass('menuIcon');
            $('.wc-console').animate({ 'bottom': 10 + 'px' }, 'fast');
            $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
            $('.wc-message-groups').removeClass('menuboxOn').addClass('menuboxOff');
        }
        $('.wc-message-groups').scrollTop($('.wc-message-group-content')[0].scrollHeight);
    });
    //안드로이드 포커스시 스크롤 최상단으로
    $(".wc-shellinput").focus(function (e) {
        if (!isIOS()) {
            setTimeout((function () {
                $('.wc-message-groups').animate({scrollTop: $('.wc-message-group-content')[0].scrollHeight});
            }), 200);
        }
    });
    $('.wc-send > div').click(function () {
        var v = $('input[type="text"].wc-shellinput').val();
        if ($(this).hasClass('sendIcon')) {
            $('.wc-shellinput').attr('placeholder', '용어검색은 " # " 을 눌러 질문하세요 →');
            $('.sapIcon-close').removeClass('sapIcon-close').addClass('menuIcon');
            $('.wc-sap').removeClass('on').addClass('off').css({ 'display': 'none' });
            $('.sendIcon').removeClass('sendIcon').addClass('sapIcon');
            $('.sapBtn').removeClass('on').addClass('off');
            $('.wc-textbox').animate({ 'left': 15 + 'px' }, 'fast');
            $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
            $('input[type="text"].wc-shellinput').blur();
        } else if ($(this).hasClass('sapIcon-search') && v != '') { //SAP단어 설정해서 보내기
            $('input[type="text"].wc-shellinput').attr('value', v).val('SAP#' + v);
            $('input[type="text"].wc-shellinput').blur();
        }
        
        $('.wc-message-groups').scrollTop($('.wc-message-group-content')[0].scrollHeight);

    });

    //복사 붙여넣기 check하여 send아이콘 변경
    $('.wc-shellinput').on('input', function (e) {
        if ($('.sapBtn').hasClass("off")) {
            $('.sapIcon').removeClass('sapIcon').addClass('sendIcon');
            $('.wc-shellinput').css({'color':'#555'});
        } else {
            $('.sendIcon').removeClass('sendIcon').addClass('sapIcon');
            $('.wc-shellinput').css({'color':'#326E9B'});
        }
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////
 
});

function isIOS() {
	var UserAgent = navigator.userAgent;

	if (UserAgent.match(/iPhone|iPad|iPod/i) != null) {
		return true;
	} else {
		return false;
	}
}
