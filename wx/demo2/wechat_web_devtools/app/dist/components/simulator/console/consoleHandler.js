"use strict";function init(){var r=require("../../../config/config.js"),e=r.COMPONENT_FOR_DEVELOPER,o=r.WXML_ERROR,i=r.PAGE_DEFINE_ERROR,s=r.WXML_RUNTIME_ERROR,n=require("../../../actions/windowActions.js");_exports=function(r){var E=r.message;0===E.indexOf(e)?n.showWeappError(e,r):0===E.indexOf(o)?n.showWeappError(o,E):0===E.indexOf(i)?n.showWeappError(i,E):0===E.indexOf(s)&&n.showWeappError(s,r)}}var _exports;init(),module.exports=_exports;