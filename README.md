date tweening

## api

`dateTween(startDate, endDate, duration, callback, done)`

Tween from startDate to endDate in duration milliseconds, and call callback
with a date object at each tween position. `done` is an optional callback
that is called when the transition finishes.

* `dateTweenFormatDate`: padded date formatter
* `dateTweenFormatTime`: padded time formatter
