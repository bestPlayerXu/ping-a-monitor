module.exports = (url, interval, ping, options) => {
	if (isNaN(interval)) throw 'The second argument, the `interval` has to be a number. Instead, ' + interval + ' has been passed as an argument.';
	var ping = () => {
		if (!ping || isNaN(ping.ping)) return console.warn('Nothing has been sent because the third argument need to be an object that contains a key with `ping` which has to be a number. Right now it is: ' + (ping ? ping.ping : 'undefined'));
		try {
			require('node-fetch')(url + (options && options.sendInQuery ? '?' + ping.ping : ''), options && options.sendInJSON ? { ping: ping.ping } : '' + ping.ping);
		} catch (e) { console.warn(e) }
	}
	if (options && options.sendAtStart) ping();
	setInterval(ping, interval);
}
