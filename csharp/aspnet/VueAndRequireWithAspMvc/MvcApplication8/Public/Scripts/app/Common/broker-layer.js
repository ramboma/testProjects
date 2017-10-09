//-------------   弹窗   --------------//

define('brokerlayer',['jquery','layer'],function($,layer)
{
        
//弹窗队列
var layerList = [];

$(function () {
    //弹窗
    if (layerList.length > 0) {
        //倒排
        for (var i = 0, j = layerList.length - 1; i < j; ++i, --j) {
            var t = layerList[i];
            layerList[i] = layerList[j];
            layerList[j] = t;
        }
        //弹出第一个窗
        openNextlayer();
    }

    //将弹窗DIV移到Body
    var bodyLayers = $(".move-to-body");
    for (var n = 0; n < bodyLayers.length; n++) {
        var $layer = bodyLayers[n];
        $($layer).remove();
        $("body").append($layer);
    }

    //针对IE6添加原生layer弹窗的支持
    if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
        $("head").append("<style>.layui-layer-hui{_filter: alpha(opacity=100);_background:#333;}</style>");
    }
});

//弹窗队列依次弹窗
var openNextlayer=function openNextlayer() {
    var layerCfg = layerList.pop();
    if (layerCfg != null) {
        //isShow设置为true，则不弹此弹框
        if (layerCfg.isShow != undefined && !layerCfg.isShow) {
            openNextlayer();
            return;
        }
        openLayer(layerCfg);
    }
}

//弹窗方法
var openLayer=function openLayer(layerCfg) {
    if (typeof layerCfg == "object") {
        var type = 2;
        if (layerCfg.type) type = layerCfg.type;
        if (type == 2) {
            var cfg = {
                type: type,
                title: false,
                closeBtn: 0,
                shadeClose: false,
                area: layerCfg.area,
                content: layerCfg.content
            };
            layer.open(cfg);
        } else if (type == 1) {
            $('#' + layerCfg.content).show();
            $(".new-layerbg").show();
        }
    } else {
        $('#' + layerCfg).show();
        $(".new-layerbg").show();
    }
}

//关闭弹窗
var closeLayer=function closeLayer(layerId) {
    if (layerId != undefined) {
        $('#' + layerId).hide();
        $(".new-layerbg").hide();
        openNextlayer();
        return;
    }
    parent.openNextlayer();
    var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
    parent.layer.close(index);
}

//移动弹窗位置
function moveLayer(layerId, top, left) {
    var layerIfram = $('#' + layerId);
    layerIfram.css({
        'top': top,
        'left': left
    });
}

//移动弹窗到中间位置
function moveLayerToCenter(layerId) {
    var top = $(document).scrollTop() + ($(window).height() - $("#" + layerId).height()) / 2;
    var left = $(document).scrollLeft() + ($(window).width() - $("#" + layerId).width()) / 2;
    moveLayer(layerId, top, left);
}

//调整弹窗大小
function resizeLayer(layerId, width, height) {
    var layerIfram = $('#' + layerId);
    layerIfram.css({
        'width': width,
        'height': height
    });
}

//调整弹窗大小
function moveResizeLayer(layerId, top, left, width, height) {
    var layerIfram = $('#' + layerId);
    layerIfram.css({
        'top': top,
        'left': left,
        'width': width,
        'height': height
    });
}

//设置导航弹窗位置和大小
/*var navCfg={ navId: 'part1', targetId: 'divTip', left:100, top:40 }
navId:导航信息DIV的ID
targetId:提示目标的ID
left,top:如果targetId缺省，则为navId的绝对位置；否则为targetId位置的修正值，即P(navId)=P(targetId)+[left,top]
*/
function showNavLayer(navCfg) {
    var navObj = $('#' + navCfg.navId);
    var left = navCfg.left;
    var top = navCfg.top;
    if (navCfg.targetId) {
        var tarObj = $('#' + navCfg.targetId, parent.document);
        if (!left) left = 0;
        if (!top) top = 0;
        left = tarObj.offset().left + left;
        top = (tarObj.offset().top + top + tarObj.height());
    }
    var layerIfram = $('iframe[name=' + window.name + ']', parent.document);
    layerIfram.css({
        'width': navObj.width() + 15,
        'height': navObj.height() + 15
    });
    var lc = $('iframe[name=' + window.name + ']', parent.document).parents('.layui-layer-iframe');
    lc.css({
        'left': left + 'px',
        'top': top + 'px',
        'width': navObj.width() + 15,
        'height': navObj.height() + 15
    });
    navObj.siblings().hide();
    navObj.show();
}

//改变弹窗大小
function changeLayerSize(width, height) {
    var layerIfram = $('iframe[name=' + window.name + ']', parent.document);
    layerIfram.css({
        'width': width,
        'height': height
    });
    var lc = $('iframe[name=' + window.name + ']', parent.document).parents('.layui-layer-iframe');
    lc.css({
        //'left': lc.offset().left - (width - lc.width) / 2,
        //'top': lc.offset().top - (height - lc.height) / 2,
        'width': width,
        'height': height
    });
}

//-------------   新弹窗相关   --------------//

//打开弹窗new-layer
function openNewLayer(layerId) {
    $(".new-layerbg").show();
    $("#" + layerId).show();
}

//关闭弹窗new-layer
function closeNewLayer(layerId) {
    $(".new-layerbg").hide();
    $("#" + layerId).hide();
}

//-------------   提示信息   --------------//

//提示信息
function alertInfo(msg) {
    layer.alert(msg, { icon: 0 });
}

//提示成功信息
function alertSuccess(msg) {
    layer.alert(msg, { icon: 1 });
}

//提示失败信息
function alertFail(msg) {
    layer.alert(msg, { icon: 2 });
}

//提问提示
function layerConfirm(msg, fooYes, fooNo) {
    layer.msg(msg, {
        time: 0, //不自动关闭,
        btn: ['确定', '取消'],
        yes: function (index) {
            layer.close(index);
            fooYes();
        },
        no: function (index) {
            layer.close(index);
            if (fooNo) {
                fooNo();
            }
        }
    });
}

//询问层，样式和方法layerOpenSuccess的风格一致
function layerConfirmNew(msg, fooYes, fooNo) {
    layer.confirm(msg, {
        btn: ['确定', '取消'] //按钮
    }, function (index) {
        layer.close(index);
        fooYes();
    }, function (index) {
        layer.close(index);
        if (fooNo) {
            fooNo();
        }
    });
}

//提示成功信息，并有快捷按钮
function layerOpenSuccess(msg, url, btn1Content, btn2Content) {
    layer.open({
        icon: 1,
        closeBtn: 1, //显示关闭按钮
        btn: [btn1Content, btn2Content],
        yes: function (index, layero) {
            window.location.href = url;
        }, btn2: function (index, layero) {
            location.reload();
        },
        //shift: 2,
        // shadeClose: false, //开启遮罩关闭
        content: msg,
        cancel: function (index) {
            layer.close(index);
        }
    });
}

//提示失败信息，并有快捷按钮
function layerOpenFail(msg, url, btn1Content, btn2Content) {
    layer.open({
        icon: 2,
        closeBtn: 1, //显示关闭按钮
        btn: [btn1Content, btn2Content],
        yes: function (index, layero) {
            window.location.href = url;
        }, btn2: function (index, layero) {
            location.reload();
        },
        content: msg,
        cancel: function (index) {
            layer.close(index);
        }
    });
    }
return {openLayer:openLayer};
}
);
