// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 68
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

$(function () {
    //채팅 위에서부터 내려오기
    $('.wc-message-group-content').css({ 'margin-top': 0 });

    $('#wrapper').css({ 'height': ($(document).height()) + 'px' });
    $('.wc-chatview-panel').css({ 'height': ($(document).height()) + 'px' });
    $(window).resize(function () {
        //$('#wrapper').css({ 'height': ($(document).height()) + 'px' });
        $('.wc-carousel').css({ 'width': ($(document).width() - 74) + 'px' });
        $('.tooltip').tooltip('show');
    });

    $('.wc-shellinput').blur();

    //tooltip
    $('.wc-menu').attr('data-toggle', 'tooltip').attr('data-placement', 'top').attr('title', '바로가기')
        .attr('data-template', '<div class="tooltip tool2" role="tooltip"><div class="tooltip-arrow arrow2"></div><div class="tooltip-inner"></div></div>').tooltip('show');

    //챗봇창 상단 생성
    $(".wc-header > span").add(
        //"<span class='chatTitle'></span>"
        "<span class='chatTitleText'>한진택배 ChatBot</span>"
    ).appendTo(".wc-header");

    //챗봇 SAP Btn 생성
    $(".wc-chatview-panel > div").add(
        "<div class='sapBtn off'>" +
        "</div > ").appendTo(".wc-chatview-panel");

    //챗봇 MENU BTN
    $(".wc-console > div").add(
        "<div class='menuBox off'>" +
        "<ul type='none'>" +
        "<li class='menuSelectBtn'>예약</li>" +
        "<li class='menuSelectBtn'>반품택배예약</li>" +
        "<li class='menuSelectBtn'>예약확인</li>" +
        "<li class='menuSelectBtn'>예약취소</li>" +
        "<li class='menuSelectBtn'>배송문의</li>" +
        "<li class='menuSelectBtn'>견적의뢰</li>" +
        "<li class='menuSelectBtn'>현금영수증</li>" +
        "<li class='menuSelectBtn'>직원/집배점 연락처</li>" +
        "<li class='menuSelectBtn'>고객의말씀</li>" +
        "</ul>" +
        "</div > ").appendTo(".wc-console");

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //챗봇 menu 선택
    $('.menuSelectBtn').click(function () {
        var v = $(this).html();
        if (v == '하고싶은말') { v = '건의사항 입력'; }
        //else { v = v + ' 선택'; }
        else { v = v + ' '; }
        $('div.wc-console').addClass('has-text');
        $('input[type="text"].wc-shellinput').attr('value', v).val(v);
        $('label.wc-send').trigger('click');
        $('input[type="text"].wc-shellinput').attr('value', '').val('').focus();
        $('.wc-console').removeClass('has-text').animate({ 'bottom': 0 + 'px' }, 'fast');
        $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
        $('.menuIcon_active').removeClass('menuIcon_active').addClass('menuIcon');
        $('.wc-message-groups').css({ 'bottom': 0 + 'px' }).scrollTop($('.wc-message-group-content')[0].scrollHeight);
    });
    //menu 이외의 다른 영역 선택시 닫힘
    $('.wc-message-groups, .wc-textbox').click(function () {
        if ($('.menuBox').hasClass('on')) {
            $('.wc-console').animate({ 'bottom': 0 + 'px' }, 'fast');
            $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
            $('.menuIcon_active').removeClass('menuIcon_active').addClass('menuIcon');
            $('.wc-message-groups').css({ 'bottom': 0 + 'px' }).scrollTop($('.wc-message-group-content')[0].scrollHeight);
        }

        if ($('.sapBtn').hasClass('off')) {
            $('.wc-shellinput').css({ 'color': '#555' });
        } else {
            $('.wc-shellinput').css({ 'color': '#326E9B' });
        }
    });

    //SAP 버튼 동작
    $('.sapIcon').click(function () {
        $('.wc-console').animate({ 'bottom': 0 + 'px' }, 'fast');
        $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
        $('.menuIcon').removeClass('menuIcon').addClass('sapIcon-close');
        $('.menuIcon_active').removeClass('menuIcon_active').addClass('sapIcon-close');
        $('.wc-shellinput').attr('placeholder', '용어검색 (일반문의는 x표)').focus();
        //$('.sapIcon').removeClass('sapIcon').addClass('sapIcon-search');
        $('.wc-sap').removeClass('off').addClass('on').css({ 'display': 'block' });
        //$('.sapBtn').removeClass('off').addClass('on');
        $('.wc-textbox').animate({ 'left': 50 + 'px' }, 'fast');
        $('.wc-message-groups').css({ 'bottom': 0 + 'px' }).scrollTop($('.wc-message-group-content')[0].scrollHeight);
    });
    //챗봇 MENU + SAP 버튼 동작
    $('.wc-menu > div').click(function () {
        $('.wc-shellinput').attr('value', '').attr('placeholder', '메세지를 입력하세요').val('').focus();

        if ($(this).hasClass('menuIcon')) {     //MENU 열기
            $('.wc-menu').tooltip('destroy'); //메뉴 선택시 tooptip삭제
            $('.wc-shellinput').blur();
            $('.menuIcon').removeClass('menuIcon').addClass('menuIcon_active');
            //$('.sendIcon').removeClass('sendIcon').addClass('sapIcon');
            $('.wc-console').animate({ 'bottom': 115 + 'px' }, 'fast');
            $('.menuBox').removeClass('off').addClass('on').css({ 'display': 'block' });
            $('.wc-message-groups').css({ 'bottom': 165 + 'px' });
        } else if ($(this).hasClass('menuIcon_active')) {   //MENU 닫기
            $('.menuIcon_active').removeClass('menuIcon_active').addClass('menuIcon');
            //$('.sendIcon').removeClass('sendIcon').addClass('sapIcon');
            $('.wc-console').animate({ 'bottom': 0 + 'px' }, 'fast');
            $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
            $('.wc-message-groups').css({ 'bottom': 0 + 'px' });
        } else if ($(this).hasClass('sapIcon-close')) {    //SAP 닫기
            $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
            //$('.sapIcon-close').removeClass('sapIcon-close').addClass('menuIcon');
            $('.wc-sap').removeClass('on').addClass('off').css({ 'display': 'none' });
            //$('.sapIcon-search').removeClass('sapIcon-search').addClass('sapIcon');
            $('.sapBtn').removeClass('on').addClass('off');
            $('.wc-textbox').animate({ 'left': 0 + 'px' }, 'fast');
        }
        $('.wc-message-groups').scrollTop($('.wc-message-group-content')[0].scrollHeight);
    });

    //SAP 아니고 문자 입력시 SEND버튼
    $('.wc-shellinput').keyup(function () {
        $('.wc-send').tooltip('destroy'); //key입력시 tooptip삭제
        $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
        $('.menuIcon_active').removeClass('menuIcon_active').addClass('menuIcon');
        $('.wc-console').animate({ 'bottom': 0 + 'px' }, 'fast');
        $('.wc-message-groups').css({ 'bottom': 0 + 'px' }).scrollTop($('.wc-message-group-content')[0].scrollHeight);
        if ($('.sapBtn').hasClass("off") && $(this).val() != '') {
            $('.sapIcon').removeClass('sapIcon').addClass('sendIcon');
            $('.wc-shellinput').css({ 'color': '#555' });
        } else {
            //$('.sendIcon').removeClass('sendIcon').addClass('sapIcon');
            $('.sendIcon').removeClass('sapIcon').addClass('sendIcon');
            $('.wc-shellinput').css({ 'color': '#326E9B' });
        }
    });
    $('.wc-shellinput').click(function () {
        $('.wc-shellinput').css({ 'ime-mode': 'active' }); //IE만 지원
        $('.wc-message-groups').scrollTop($('.wc-message-group-content')[0].scrollHeight);
    });
    $('.wc-send > div').click(function () {
        var v = $('input[type="text"].wc-shellinput').val();
        if ($(this).hasClass('sendIcon')) {
            $('.wc-shellinput').attr('placeholder', '메세지를 입력하세요');
            $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
            $('.wc-console').animate({ 'bottom': 0 + 'px' }, 'fast');
            $('.sapIcon-close').removeClass('sapIcon-close').addClass('menuIcon');
            $('.wc-sap').removeClass('on').addClass('off').css({ 'display': 'none' });
            //$('.sendIcon').removeClass('sendIcon').addClass('sapIcon');
            $('.sapBtn').removeClass('on').addClass('off');
            $('.wc-textbox').animate({ 'left': 0 + 'px' }, 'fast');
        } else if ($(this).hasClass('sapIcon-search') && v != '') { //SAP단어 설정해서 보내기
            $('input[type="text"].wc-shellinput').attr('value', v).val('SAP#' + v);
        }
        $('.wc-message-groups').scrollTop($('.wc-message-group-content')[0].scrollHeight);
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////

});