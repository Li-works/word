
var service = require("service");

exports.form = {
	dep: "BJP",
	dst: "WHN",
	depDate: "2016-02-05",
	passengerType: "ADULT",
	data: []
};

exports.stateMap = {
	BJP: "北京",
	WHN: "武汉"
};

exports.query = function(){
	service.getSurplusTicketCount(this.form, (rs) => {
		if(rs.success){
			this.queryResult.render();
		}else{
			this.alert(rs.message);
		}
	});
};