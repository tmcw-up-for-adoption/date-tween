function lpad(x, l, w) {
    w = w || ' ';
    var s = '' + x;
    while (s.length < l) s = w + s;
    return s;
}

function dateTweenFormatDate(d) {
    var monthNames = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];
    return lpad(monthNames[d.getMonth()], 10) + ' ' + lpad(d.getDate(), 2) + ', ' + d.getFullYear();
}

function dateTweenFormatTime(d) {
    var h = d.getHours() + 1;
    var ampm = 'am';
    if (h > 12) {
        h -= 12;
        ampm = 'pm';
    }
    return lpad(h, 2) + ':' + lpad(d.getMinutes(), 2, '0') +
        ':' + lpad(d.getSeconds(), 2, '0') + ampm;
}

function dateTween(a, b, t, c, f) {
    var as = +a,
        bs = +b,
        dist = bs - as,
        start = +new Date(),
        r, end = start + t;

    function update() {
        var now = +new Date();
        if (now < end) {
            r = ((now - start) / t);
            c(new Date(as + (dist * r)));
            setTimeout(update, 10);
        } else {
            c(new Date(bs));
            if (f) f(new Date(bs));
        }
    }
    update();
}

if (typeof module !== 'undefined') module.exports = {
    dateTween: dateTween,
    dateTweenFormatDate: dateTweenFormatDate,
    dateTweenFormatTime: dateTweenFormatTime
};
