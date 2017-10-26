"use strict";

function init() {
    var t = require("../../lib/react.js"),
        e = require("../../cssStr/cssStr.js"),
        o = require("../../stores/webviewStores.js"),
        s = ["wifi", "2g", "3g", "4g"],
        r = require("../../stores/windowStores.js"),
        i = require("../../actions/windowActions.js"),
        n = "network",
        a = t.createClass({
            displayName: "Network",
            getInitialState: function() {
                var t = o.getNetworkType();
                return { show: !1, nettype: t }
            },
            handleOnClick: function(t) {
                t.stopPropagation();
                var e = !this.state.show;
                this.setState({ show: e }), i.clickToolsbar(n)
            },
            _clickToolsbar: function(t) { n != t && this.setState({ show: !1 }) },
            componentDidMount: function() { r.on("CLICK_TOOLSBAR", this._clickToolsbar), r.on("BODY_CLICK", this._clickToolsbar) },
            componentWillUnmount: function() { r.removeListener("CLICK_TOOLSBAR", this._clickToolsbar), r.removeListener("BODY_CLICK", this._clickToolsbar) },
            clickNettype: function(t) {
                t.stopPropagation();
                var e = t.currentTarget,
                    s = e.dataset,
                    r = s.nettype;
                o.setNetworkType(r), this.setState({ show: !1, nettype: r })
            },
            render: function() {
                var o = this.state.show ? {} : e.displayNone,
                    r = this.state.show ? "simulator-toolbar-model-icon-up" : "simulator-toolbar-model-icon-down",
                    i = [];
                for (var n in s) {
                    var a = s[n],
                        l = "simulator-toolbar-model-content-item";
                    a === this.state.nettype && (l += " simulator-toolbar-model-content-item-current"), i.push(t.createElement("div", { onClick: this.clickNettype, className: l, "data-nettype": a, key: a }, t.createElement("p", null, a)))
                }
                return t.createElement("div", { className: "simulator-toolbar-model simulator-toolbar-model_network", onClick: this.handleOnClick }, t.createElement("p", null, this.state.nettype), t.createElement("i", { className: r }), t.createElement("div", { className: "simulator-toolbar-model-content", style: o }, i))
            }
        });
    _exports = a
}
var _exports;
init(), module.exports = _exports;
