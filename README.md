# ping-a-monitor
Pings the monitor with a ping (for discord ws ping?) every x seconds to XYZ website.

How to use it:
```
require('pingmonitor')('https:ping.that/u/r.l', intervalInMs, () => ping, { sendInQuery: false, sendInJSON: true, sendAtStart: true });
```
This code is pinging `https:ping.that/u/r.l` every intervalInMs milliseconds with an object `{ ping: number }`.


Set `sendInQuery: true` to ping the url in form of `https:ping.that/u/r.l?ping=ping` (instead of sending as JSON).

If `sendInJSON` isn't true, the ping will be sent via `text`.


Easy ... that's it!



Author: bestPlayer_xu
