
var app = req("sys.app");

app.viewEx = req("util.viewEx");

app.config({
	js: "/js/",
	tp: "/templates/"
});

app.usePlugin("seekjs-plugin-dialog");
app.usePlugin("seekjs-plugin-mask");

app.init("home");