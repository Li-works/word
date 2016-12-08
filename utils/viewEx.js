
var app = require("sys.app");

exports.alert = function(...args){
	app.plugin.dialog.alert.apply(null,args);
};