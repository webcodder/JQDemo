"use strict";

function init() {
    var e = require("../lib/flux.js").Dispatcher,
        r = new e,
        i = require("./webviewDispatcher.js"),
        s = require("./leftviewDispatcher.js"),
        t = require("./windowDispatcher.js"),
        p = require("./projectDispatcher.js"),
        u = i(r);
    s(r, u), t(r), p(r), _exports = r
}
var _exports;
init(), module.exports = _exports;
