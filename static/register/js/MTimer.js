function MTimer(opt) {
    var defaults = {
        timing: null,//计时回调
        interval: 120,
        end: null  //结束回调
    };

    this.opts = $.extend(defaults, opt);
    this.interval = this.opts.interval;
    this.oTimer = null;
    var _instance = this;
    this.Timing = function () {
        _instance.opts.interval--;
        _instance.opts.timing(_instance.opts.interval);
        if (_instance.opts.interval < 1) {
            _instance.clearInterval();
            if ($.isFunction(_instance.opts.end))
                _instance.opts.end();
        }
    }
}
MTimer.prototype.setInterval = function () {
    this.opts.interval = this.interval;
    this.oTimer = setInterval(this.Timing, 1000);
}
MTimer.prototype.clearInterval = function () {
    if (this.opts.timing != null) {
        clearInterval(this.oTimer);
    }
}
