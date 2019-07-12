$(function () {
    //IE Version Check
	var ie = (function (){
		if (window.ActiveXObject === undefined) return null;
		if (!document.querySelector) return 7;
		//if (parseFloat(navigator.appVersion.split("MSIE")[1].split(";")[0].split(" ").join("")) == 8) return 8;
		if(!document.addEventListener) return 8;
		if (!window.atob) return 9;
		if (!document.__proto__) return 10;
		return 11;
	})();
	if(ie == 10 || ie == 9 || ie == 8 || ie == 7){
		$('.bot-wrap').remove();
		$(".banner").remove();
    }
});

function isMobile() {
    var UserAgent = navigator.userAgent;

    if (UserAgent.match(/iPhone|iPad|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
        return true;
    } else {
        return false;
    }
}

function closeWin() {

    var nvua = navigator.userAgent;
    if (nvua.indexOf('MSIE') >= 0) {
        if (nvua.indexOf('MSIE 5.0') == -1) {
            top.opener = '';
        }
    } else if (nvua.indexOf('Gecko') >= 0) {
        top.name = 'CLOSE_WINDOW';
        wid = window.open('', 'CLOSE_WINDOW');
    }
    top.close();
}


if (isMobile()) {   //모바일 환경
    //location.href = "default_m.asp";   
}
