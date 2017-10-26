/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.6.0(a43fe71b7f6e022d0d1bb2d0ef8fd4e31aa3f431)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
(function(){var r=["vs/languages/razor/common/razorWorker","require","exports","vs/languages/html/common/htmlWorker"],t=function(t){for(var o=[],n=0,a=t.length;n<a;n++)o[n]=r[t[n]];return o},o=this&&this.__extends||function(r,t){function o(){this.constructor=r}for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);r.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)};define(r[0],t([1,2,3]),function(r,t,n){"use strict";function a(){var r={a:["asp-action","asp-controller","asp-fragment","asp-host","asp-protocol","asp-route"],div:["asp-validation-summary"],form:["asp-action","asp-controller","asp-anti-forgery"],input:["asp-for","asp-format"],label:["asp-for"],select:["asp-for","asp-items"],span:["asp-validation-for"]};return{getId:function(){return"razor"},collectTags:function(r){},collectAttributes:function(t,o){if(t){var n=r[t];n&&n.forEach(function(r){return o(r,null)})}},collectValues:function(r,t,o){}}}t.getRazorTagProvider=a;var e=function(r){function t(){r.apply(this,arguments)}return o(t,r),t.prototype.addCustomTagProviders=function(r){r.push(a())},t}(n.HTMLWorker);t.RAZORWorker=e})}).call(this);
//# sourceMappingURL=../../../../../min-maps/vs/languages/razor/common/razorWorker.js.map