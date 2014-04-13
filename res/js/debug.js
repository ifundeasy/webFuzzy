/**
 * todo : for turn off
 * DEBUGMODE = undefined
 * DEBUGMODE = false
 */
DEBUGMODE = true;
log = (function(undefined) {
	var Log = Error;
	Log.prototype.write = function (args) {
		/*
		var suffix = {
			"@": (this.lineNumber
				? this.fileName + ':' + this.lineNumber + ":1"
				: lineStack(this.stack)
				)
		};
		args = args.concat([suffix]);
		*/
		args = args.concat([lineStack(this.stack)]);

		if (console && console.log) {
			if (console.log.apply) {console.log.apply(console, args);} else {console.log(args);}
		}
	};
	var lineStack = function (stack) {
		var line = stack.split('\n')[3];
		line = line.indexOf(' (') >= 0 ? line.split(' (')[1].substring(0, line.length - 1) : line.split('at ')[1];
		return line.substr(0, line.length-1);
	};

	return function (params) {
		if (typeof DEBUGMODE === typeof undefined || !DEBUGMODE) return;
		Log().write(Array.prototype.slice.call(arguments, 0));
	};

})();