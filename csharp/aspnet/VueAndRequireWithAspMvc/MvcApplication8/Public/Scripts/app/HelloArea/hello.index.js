define(['jquery','jqueryui','layer','brokerlayer'], function ($,jqueryui,layer,brokerlayer) {
    console.log('Loaded: hello index.js');
    $(document).ready(
        function()
        {
            console.log('ready...');
            $("#bt1").click(function()
                {
                    console.log('click bt1');
                    postback();
                    $( "#dialog" ).dialog();
                });
            $("#showlayer").click(function()
                {
                    //layer.confirm('hehe', {
                    //    btn: ['确定', '取消'] //按钮
                    //}, function (index) {
                    //    layer.close(index);
                    //}, function (index) {
                    //    layer.close(index);
                    //    });
                    brokerlayer.openLayer({
                        title: '第二个IFRAME弹窗',
                        area: ['500px', '200px'],
                        content: 'www.baidu.com'
                    });

                });
        });

    function postback()
{
    $("#bt1").val("hehe");
}

});
