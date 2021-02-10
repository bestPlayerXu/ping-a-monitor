module.exports = (url, interval, ping, options) => {
	if (isNaN(interval)) throw 'The second argument, the `interval` has to be a number. Instead, ' + interval + ' has been passed as an argument.';
	var pingTheMonitor = () => {
		var pingRN = ping();
		if (isNaN(pingRN)) return console.warn('Nothing has been sent because the third argument need to be a function that returns a number. Right now it is: ' + pingRN);
		try {
			require('node-fetch')(url + (options && options.sendInQuery ? '?ping=' + pingRN : ''), options && options.sendInJSON ? { ping: pingRN } : '' + pingRN);
		} catch (e) { console.warn(e) }
	}
	if (options && options.sendAtStart) pingTheMonitor();
	setInterval(pingTheMonitor, interval);
}
