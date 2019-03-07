<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
    <meta name="viewport" content="width=380" />

    <link rel="stylesheet" href="assets/css/jquery-ui.css" />
    <link rel="stylesheet" href="assets/css/bootstrap/bootstrap.css" />
    <link rel="stylesheet" href="assets/css/common.css" />
    <link rel="stylesheet" href="assets/css/pc/botchat.css" />
    <link rel="stylesheet" href="assets/css/pc/style.css" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script type="text/javascript" src="assets/js/jquery-ui.js"></script>
    <script type="text/javascript" src="assets/js/bootstrap.js"></script>
    <script type="text/javascript" src="assets/js/start.js"></script>
    <script type="text/javascript" src="assets/js/pc/ui.js"></script>
    <script type="text/javascript" src="assets/js/pc/autocompleteword.js"></script>
    <title>HanjinChatBot</title>
</head>
<body>
    <input type="hidden" id="conversationId" />
    <!--<input type="hidden" id="key"  value="<%=request.form("key") %>"/>
    <input type="hidden" id="cjworld_id_get" value="<%=request("cjworld_id") %>"/>
    <input type="hidden" id="cjworld_id_post" value="<%=request.form("cjworld_id") %>"/>
    <input type="hidden" id="lang"  value="<%=request.form("lang") %>"/>-->
    <div class="mainBG">
        <!-- 여기서 부터 -->
        <div class="bot-wrap chatOn">
            <!--<script> 
                //두연(get방식으로 넘길때 (+) 특수기호의 경우 삭제 되기 때문에 이 방식으로 다시 값 설정을 해준다.)
                var encodeVal = encodeURIComponent($('#cjworld_id_get').val()); //get방식으로 넘기기 전에 encode
                $('#cjworld_id_get').val(encodeVal);
            </script>-->
            <div id="bot" />
            <script src="assets/js/botchat.js"></script>
            <script>
                BotChat.App({
                    directLine: {
                        secret: 'DaL8yJX-9dQ.a7sAYrmH71hQF0drR4PDyGdEKWzq7n5gC6CB_Xx8Vfs'   //TaihoChatBotV4
                        //,domain: 'https://northamerica.directline.botframework.com/v3/directline'
                    },
                    user: { id: 'userid' },
                    bot: { id: 'botid' },
                    resize: 'detect'
                }, document.getElementById("bot"));
            </script>
            <!--<script src="assets/js/ssoConnect.js"></script>-->
        </div>
        <!-- 끝 -->
    </div>
</body>
</html>