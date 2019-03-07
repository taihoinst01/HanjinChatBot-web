<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1" />
    <meta name="viewport" content="width=380" />

    <link rel="stylesheet" href="assets/css/jquery-ui.css" />
    <link rel="stylesheet" href="assets/css/bootstrap/bootstrap.css" />
    <link rel="stylesheet" href="assets/css/common.css" />
    <link rel="stylesheet" href="assets/css/pc/botchat.css" />
    <link rel="stylesheet" href="assets/css/pc/style.css" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script type="text/javascript" src="assets/js/jquery-ui.js"></script>
    <script type="text/javascript" src="assets/js/bootstrap.js"></script>
    <script type="text/javascript" src="assets/js/start_pop.js"></script>
    <script type="text/javascript" src="assets/js/pc/ui.js"></script>
    <title>TaihoChatBotv4</title>
</head>
<body>
    <form name="frm" method="post" action="default.asp">
        <input type="hidden" id="conversationId" />
        <input type="hidden" id="key"  value="<%=request.form("key") %>"/>
        <input type="hidden" name="cjworld_id" value="<%=request("cjworld_id") %>"/>
        <input type="hidden" id="lang"  value="<%=request.form("lang") %>"/>
    </form>
    <div class="mainBG">
        <div id="wrapper">
            <div id="navi-header-wrap">
                <div class="banner" id="botChatBtn"></div>
            </div>
        </div>
    </div>
</body>
</html>