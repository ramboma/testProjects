define(['vue'], function (Vue) {
    console.log('Loaded: hello VueTest3.js');
    return {
        init:function(data)
        {
            var vm = new Vue(
                 {
                     el: '#testapp3',
                     data: data,
                     methods:
                         {
                             del: function (key) {
                                 console.log(key);
                                 for(var del=0;del<this.sogas.length;del++)
                                 {
                                     if(this.sogas[del].sogaid==key)
                                     {
                                         this.sogas.splice(del,1);
                                         break;
                                     }
                                 }
                             }
                         },
                     components:
                         {
                             'edit-template': {
                                 template:'<div> it is a part component</div>'
                             },
                             

                         }
                 });
            return vm;
        }
    }
});
