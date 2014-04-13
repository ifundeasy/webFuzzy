/**
 * Created by rappresent on 4/13/14.
 */

function config() {
	var me = this;
	me.localStorage = 'webFuzzy';
}

config.prototype.initBase = function (string) {
	var me = this;
	string = string || './application';

	me.modules = {
		base       : string,
		views      : string + '/views/',
		controllers: string + '/controllers/',
		models     : string + '/models/',
		stores     : string + '/stores/'
	};

	return string
};

config.prototype.view = function (string) {
	var me = this;
	return me.modules.views + string;
};

config.prototype.initView = function (string, callback) {
	var me = this;
	$.ajax({
		url        : me.modules.views + string,
		method     : 'GET',
		cache      : false,
		//async      : false,
		cors       : true,
		xhrFields  : {
			withCredentials: true
		},
		crossDomain: true,
		dataType: 'html',
		success    : function (data, status, xhr) {
			/**
			 *
			 */
			return callback(data, status, xhr)
		}
	}).fail(function(){
		console.log('fail to load : ', string)
	});
};

config.prototype.controller = function (string) {
	var me = this;
	return me.modules.controllers + string;
};

config.prototype.uuid = function (string) {
	var date = new Date();
	var time = date.getTime();
	return ('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = (time + Math.random() * 16) % 16 | 0;
		time = Math.floor(time / 16);
		return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
	}));
};

config.prototype.numberWithCommas = function (number) {
	if (typeof number == "number") {
		number = (Math.round((number) * 100) / 100).toString();
		var dotLastIndex = number.lastIndexOf(".");
		if (dotLastIndex === -1) {
			number = number + ".00"
		} else {
			var decimal = number.substring(dotLastIndex+1);
			var nonDecimal = number.substring(0, dotLastIndex);
			number = nonDecimal + "." + decimal;

			if (number[number.lastIndexOf(".")+2] == undefined) {
				number = number + "0"
			}
		}

		var parts = number.toString().split(",");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	} else {
		//log(number, ": please only number")
	}
};

config.prototype.toProperCase = function toProperCase(s) {
	return s.toLowerCase().replace(/^(.)|\s(.)/g, function ($1) {
		return $1.toUpperCase();
	});
};

config.prototype.init = function () {
	var me = this;
	me.initBase();
};

var config = new config();
config.init();