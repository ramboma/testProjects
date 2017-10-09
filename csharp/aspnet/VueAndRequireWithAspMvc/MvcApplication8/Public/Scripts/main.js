require.config({
    waitSeconds: 0,
    baseUrl: "/Public/Scripts/app",
    paths: {
        jquery: "../lib/jquery-1.7.1/jquery-1.7.1",
        jqueryValidate: "../lib/jquery.validate/jquery.validate",
        jqueryui: "../lib/jquery-ui-1.8.20/jquery-ui-1.8.20",
        layer: "../lib/layer/layer",
        brokerlayer: "common/broker-layer",
        angular: "../lib/angular/angular",
        vue: "../lib/vuejs/vue",
       
    },
    map: {
        '*': {
            'css': '../lib/requirejs/css'
        }
    },
    shim: {
        jqueryValidate: ["jquery"],
        jqueryui: ["jquery", "css!../../Styles/lib/jquery-ui-1.8.20/jquery-ui.css"],

        layer: {
            deps: ["jquery", "css!../../Styles/lib/layer/layer.css"],
            exports: 'layer'
        },
        angular: {
            exports: 'angular'
        },
        vue: {
            exports: 'vue'
        }
    }
});

