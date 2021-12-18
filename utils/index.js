var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var rq = require('request-promise');
export var createGithubRequest = function (opt) {
    var options = __assign({ headers: {
            'User-Agent': 'Request-Promise'
        }, json: true }, opt);
    return function () { return rq(options); };
};
