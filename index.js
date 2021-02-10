module.exports = (url, interval, ping, options) => {
	if (!isNumber(interval)) throw 'The second argument, the `interval` has to be a number';
	var ping = () => {
		if (!ping || !isNumber(ping.ping)) return console.warn('Nothing has been sent because the third argument need to be an object that contains a key with `ping` which has to be a number');
		try {
			require('node-fetch')(url + (options && options.sendInQuery ? '?' + ping.ping : ''), options && options.sendInJSON ? { ping: ping.ping } : '' + ping.ping);
		} catch (e) { console.warn(e) }
	}
	if (options && options.sendAtStart) ping();
	setInterval(ping, interval);
}
