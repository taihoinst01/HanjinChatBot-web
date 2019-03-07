<!DOCTYPE html>
<html>
<meta content="text/html" charset="utf-8">
<title></title>
<%
    response.write("url" + request("url")+"<br>")
    response.write("cjworld_id" + request("cjworld_id")+"<br>")
    response.end
    %>
<body>
    <form name="frm" action="<%=request("url") %>" method="post">
        <input type="hidden" name="cjworld_id" id="cjworld_id" value="<%=request("cjworld_id") %>">
        <input type="hidden" name="movetype" id="movetype" value="<%=request("movetype") %>">
        <input type="hidden" name="gopage" value="10">
        <input type="hidden" name="language" value="ko">
    </form>
</body>
<script>
    
</script>
</html>