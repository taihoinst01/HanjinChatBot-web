$(function () {
    //$('.bot-wrap').hide();
});

function isMobile() {
	var UserAgent = navigator.userAgent;

	if (UserAgent.match(/iPhone|iPad|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
		return true;
	} else {
		return false;
	}
}

if (isMobile()) {   //모바일 환경
    //2. 로딩시 표출
    var cjworld_id_get = $('#cjworld_id_get').val();

    if (cjworld_id_get != '' || cjworld_id_get != null) {
        location.href = "default_m.asp?cjworld_id=" + cjworld_id_get;
    } else {
        location.href = "error_route.html";
    }
} else {    // 웹 환경
    var cjworld_id_post = $('#cjworld_id_post').val();
    if (cjworld_id_post == '' || cjworld_id_post == null) {
        location.href = "error_route.html";
    }
}