"use strict";

function init() {
    var e = require("../stores/leftviewStores.js");
    module.exports = function(i, t) {
        i.register(function(r) {
            i.waitFor([t]);
            var s = r.webviewID;
            switch (r.actionType) {
                case "LEFTVIEW_CLICK_RIGHTHEADER":
                    e.clickRightHeader(s);
                    break;
                case "LEFTVIEW_UP_SHARESTATUS":
                    e.upShareStatus(s, r.show);
                    break;
                case "LEFTVIEW_CLICK_MASK":
                    e.clickMask(s);
                    break;
                case "LEFTVIEW_HIDEALL":
                    e.hideAll(s)
            }
        })
    }
}
init();
