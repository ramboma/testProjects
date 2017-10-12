define(['vue'], function (Vue) {
    console.log('Loaded: hello VueTest4.js');
    return {
        init: function (data) {
            
            var vm = new Vue(
                 {
                     el: '#testapp4',
                     data:
                         {
                             initData:data,
                             columns:["id","name"],
                             currentView:'testdefault-template'
                         },
                     methods:
                         {
                             del: function (key) {
                                 console.log(key);
                                 for (var del = 0; del < this.sogas.length; del++) {
                                     if (this.sogas[del].sogaid == key) {
                                         this.sogas.splice(del, 1);
                                         break;
                                     }
                                 }
                             },
                             changeview: function () {
                                 if (this.currentView == 'testedit-template')
                                    this.currentView='testdefault-template';
                                 else
                                    this.currentView='testedit-template';
                             }
                         },
                     components:
                         {
                             'default-template': {
                                 template: '<tr v-for="soga in sogas">'
                                    + '<td>{{soga.sogaid}}</td>'
                                    + '<td>{{soga.soganame}}</td>'
                                    + '<td>'
                                    + '<a href="#" v-on:click="edit(soga.sogaid)">编辑</a>'
                                    + '<a href="#" v-on:click="del(soga.sogaid)">删除</a>'
                                    + '</td>'
                                    + '</tr>'
                             },
                             'edit-template': {
                                 template: '<tr v-for="soga in sogas">'
                                    + '<td><input type="text" v-model="soga.sogaid"/></td>'
                                    + '<td><input type="text" v-model="soga.soganame"/></td>'
                                    + '<td>'
                                    + '<a href="#" v-on:click="save(soga.sogaid)">保存</a>'
                                    + '<a href="#" v-on:click="cancel(soga.sogaid)">取消</a>'
                                    + '</td>'
                                    + '</tr>'
                             },
                             'testdefault-template': {
                                 template: '<tr>'
                                    + '<td>1111</td>'
                                    + '<td>test</td>'
                                    + '<td>'
                                    + '<a href="#" >编辑</a>'
                                    + '<a href="#" >删除</a>'
                                    + '</td>'
                                    + '</tr>'
                             },
                             'testedit-template': {
                                 template: '<tr>'
                                    + '<td><input type="text"/></td>'
                                    + '<td><input type="text"/></td>'
                                    + '<td>'
                                    + '<a href="#">保存</a>'
                                    + '<a href="#">取消</a>'
                                    + '</td>'
                                    + '</tr>'
                             },

                         }
                 });
            return vm;
        }
    }
});
