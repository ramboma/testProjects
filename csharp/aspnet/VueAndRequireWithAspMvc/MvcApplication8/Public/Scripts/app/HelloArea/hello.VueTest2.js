define(['vue'], function (Vue) {
    console.log('Loaded: hello VueTest2.js');
    return {
        init:function(data)
        {
            var vm = new Vue(
                 {
                     el: '#testapp1',
                     data:data 
                 });
            return vm;
        }
    }
});
