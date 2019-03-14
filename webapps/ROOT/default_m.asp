<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi" />

    <link rel="stylesheet" href="assets/css/jquery-ui.css" />
    <link rel="stylesheet" href="assets/css/bootstrap/bootstrap.css" />
    <link rel="stylesheet" href="assets/css/common.css" />
    <link rel="stylesheet" href="assets/css/mobile/m_botchat.css" />
    <link rel="stylesheet" href="assets/css/mobile/m_style.css" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script type="text/javascript" src="assets/js/jquery-ui.js"></script>
    <script type="text/javascript" src="assets/js/bootstrap.js"></script>
    <script type="text/javascript" src="assets/js/mobile/m_ui.js"></script>
    
    <title>TaihoChatBotv4</title>
</head>
<body>
    <input type="hidden" id="conversationId" />
    <!--<input type="hidden" id="cjworld_id_get" value="<%=request("cjworld_id") %>"/>-->
    <div class="mainBG">
        <!-- 여기서 부터 -->
        <div class="bot-wrap chatOn">
            <div id="bot" />
            <!--<script>
                //두연(get방식으로 넘길때 (+) 특수기호의 경우 삭제 되기 때문에 이 방식으로 다시 값 설정을 해준다.)
                var decodeVal = decodeURIComponent($('#cjworld_id_get').val()); //get방식으로 넘어온부분을 decode
                var encodeVal = encodeURIComponent(decodeVal);  // value에 넣기 위해 encode
                $('#cjworld_id_get').val(encodeVal);  // 원래대로 돌려 value에 다시 넣는다.
            </script>-->
            <script src="assets/js/botchat.js"></script>
            <script>
                BotChat.App({
                    directLine: {
                        //secret: 'DaL8yJX-9dQ.a7sAYrmH71hQF0drR4PDyGdEKWzq7n5gC6CB_Xx8Vfs'   //TaihoChatBotV4
                secret: 'yC13LslTYjY.aVEoGDPPuVrPDAbn0AcEUCx7yQDLWBvL0g3niiFIMi8'   //HanjinChatBot
                        //,domain: 'https://northamerica.directline.botframework.com/v3/directline'
                    },
                    user: { id: 'userid' },
                    bot: { id: 'botid' },
                    resize: 'detect'
                }, document.getElementById("bot"));
            </script>
        </div>
        <!-- 끝 -->
    </div>
</body>
</html>