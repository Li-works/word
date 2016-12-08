seekjs.config({
    alias: {
        service: "/utils/service.js"
    },
    ns: {
        util: "/utils/"
    }
});

var app = require("sys.app");

app.viewEx = require("util.viewEx");

app.config({
	js: "/js/",
	tp: "/templates/"
});

app.usePlugin("seekjs-plugin-dialog");
app.usePlugin("seekjs-plugin-mask");

app.init("home");