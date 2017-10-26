"use strict";function init(){var e=require("../../lib/react.js"),t=require("../../stores/webviewStores.js"),s=require("../../actions/leftviewActions.js"),i=require("../../stores/windowStores.js"),o=require("../../actions/windowActions.js"),r=require("../../actions/projectActions.js"),n=require("../../common/log/log.js"),a=require("../../config/config.js"),c=(require("../../common/jssdk/sdkNameTrans.js"),require("../../utils/newReport.js")),p=require("./console/consoleHandler.js"),u=!1,w=function(e){o.showTipsMsg({msg:e,type:"error"})},v=function(e,t){o.showConfirm({content:e,type:"confirm",callback:t})},h={},l=e.createClass({displayName:"WebviewBody",getInitialState:function(){return{webviewID:parseInt(this.props.webviewID)}},captureVisibleRegion:function(){var e=this;this.webview.captureVisibleRegion(function(t){e.props.getSimulatorActions("S_GET_SNAPSHOT",e.state.webviewID,{dataURI:t})})},_setWebviewActions:function(e,t){var s=this,i=this.webview,o=t.act,n=this.postMessage;switch(o){case"reBuild":this.props.project&&setTimeout(function(){r.restart(s.props.project),c("project_shortcut_restart",s.props.project.appid)},17);break;case"reLoad":i.reload();break;case"goBack":this.props.goBack();break;case"goForward":i.forward();break;case"load":u="urlbar"!==t.from,i.src=t.url;break;case"goToBlank":i.src="app/html/about.html";break;case"sendMsg":var a={sdkName:t.sdkName,res:t.res};n("webframe",a,"INVOKE_SDK",t.ext);break;case"sendMsgFromAppService":n("webframe",t,"MSG_FROM_APPSERVICE");break;case"open":nw.Shell.openExternal(i.src);break;case"CAPTURE":return void this.captureVisibleRegion()}},_getJSSDKRes:function(e,t,s,i){n.info("WebviewBody.js GET_JSSDK_RES "+e+", "+t+", "+JSON.stringify(s)+", "+JSON.stringify(i));var o={sdkName:t,res:s};this.postMessage("webframe",o,"GET_JSSDK_RES",i)},setUserAgentOverride:function(e){e=e||t.getUA().replace("{{webviewID}}",this.state.webviewID),this.props.project&&(e+=" weapp"),this.webview.setUserAgentOverride(e)},setWebviewSrc:function(e){this.webview.src=e},upWebviewStatus:function(e){var t=this.webview,s={url:t.src,canGoBack:t.canGoBack()};this.props.getSimulatorActions("S_UP_WEBVIEW_STATUS",this.state.webviewID,Object.assign(e,s))},loadstart:function(){var e=this;this.webview.addEventListener("loadstart",function(t){t.isTopLevel&&e.upWebviewStatus({loading:"start"})})},loadcommit:function(){var e=this,t=this.webview;t.addEventListener("loadcommit",function(s){if(s.isTopLevel&&(e.upWebviewStatus({type:"loadcommit"}),e.props.project&&(h={}),!e.initDevtools)){if(e.props.project){var i=e.props.offset;e.props.getSimulatorActions("S_START_DEBUGGEE",e.state.webviewID,{webview:t,webviewOffset:i})}else{var o=e.props.offset;e.props.getSimulatorActions("S_OPEN_DEVTOOLS",e.state.webviewID,{webview:t,webviewOffset:o})}e.initDevtools=!0}})},loadstop:function(){var e=this;this.webview.addEventListener("loadstop",function(t){e.upWebviewStatus({loading:"stop"}),e.props.project||e.postMessage("webframe",{},"COMMAND_GET_TITLE"),s.hideAll(e.state.webviewID)})},initEvent:function(){var e=this;this.loadstart(),this.loadcommit(),this.loadstop();var t=this.webview;global.appConfig.isDev||t.contextMenus.onShow.addListener(function(e){e.preventDefault()}),t.addEventListener("newwindow",function(e){"new_window"===e.windowOpenDisposition&&(t.src=e.targetUrl)}),t.addEventListener("dialog",function(t){var s=t.messageType||"",i=t.messageText,o=t.dialog;if("alert"===s)if(e.props.isMap&&0===i.indexOf("map handle:")){var r=i.replace("map handle:","");e.props.chooseLocation(JSON.parse(r))}else w(i);else if("confirm"===s)t.preventDefault(),v(i,function(e){e?o.ok():o.cancel()});else if("prompt"===s){var n=prompt(i);null!==n?o.ok(n):o.cancel()}})},onBeforeSendHeaders:function(){var e=this.webview,t=e.request;t.onBeforeSendHeaders.addListener(function(e){if(e.requestHeaders)return e.requestHeaders.push({name:"linchao",value:"chaolin"}),{requestHeaders:e.requestHeaders}},{urls:["<all_urls>"]},["blocking","requestHeaders"])},onBeforeRequest:function(){var e=this,t=this.webview,s=t.request;s.onBeforeRequest.addListener(function(t){if("main_frame"!==t.type)return{};if(!u)return u=!0,{};var s=t.url;if(/^chrome-extension:\/\//.test(s)||/^file:\/\//.test(s))return{};if(a.weappURLRegular.test(s))return{};var i=/\#wechat_redirect$/.test(s);return e.props.getSimulatorActions("S_GET_A8KEY",e.state.webviewID,{url:s,isSync:i}),{cancel:i}},{urls:["<all_urls>"]},["blocking"])},onHeadersReceived:function(){var e=this,t=this.webview,s=t.request;s.onHeadersReceived.addListener(function(t){var s=(t.responseHeaders||[],t.type,e.state.webviewID);e.props.project&&0===e.state.webviewID&&!e.tiggerAppRoute&&(e.props.postAppRoute(e.webview.src,e.state.webviewID,"appLaunch"),e.tiggerAppRoute=!0),"main_frame"===t.type&&e.props.getSimulatorActions("S_CLEAN_WEBVIEW",s)},{urls:["<all_urls>"]},["blocking","responseHeaders"])},initRequest:function(){this.onHeadersReceived(),this.onBeforeRequest(),this.onBeforeSendHeaders()},permissionrequest:function(){this.webview.addEventListener("permissionrequest",function(e){"geolocation"===e.permission&&e.request.allow()})},addContentScripts:function(){this.webview.addContentScripts([{name:"contentscript",matches:["<all_urls>"],js:{files:["app/dist/contentscript/contentScript.js"]},run_at:"document_start"}])},_initport:function(e){var s=this;e.name==="webview"+this.state.webviewID&&(n.info("WebviewBody.js chrome.runtime.onConnect.addListener "+e.name),this.port=e,this.portID=e.name,t.addWebviewPorts(this.portID,this.port),this.port.onMessage.addListener(this.onMessage),this.port.onDisconnect.addListener(function(){t.delWebviewPorts(s.portID),s.port.onMessage.removeListener(s.onMessage),delete s.port,delete s.portID,s.msgQuery=[]}),this.postMessage("contentscript",{},"SHAKE_HANDS"))},initRuntime:function(){chrome.runtime.onConnect.addListener(this._initport)},toAppService:function(e){e.webviewID=this.state.webviewID,this.props.getSimulatorActions("S_POSTMSG_TO_AS",this.state.webviewID,e)},onMessage:function(e){var t=e.command,s=this.state.webviewID,i=e.msg;switch(t){case"COMMAND_GET_TITLE":this.upWebviewStatus(i);break;case"EXEC_JSSDK":i.ext=e.ext,this.props.getSimulatorActions("S_EXEC_JSSDK",s,i);break;case"TO_APP_SERVICE":this.toAppService(i);break;case"PULLDOWN_REFRESH":this.props.getSimulatorActions("S_POSTMSG_TO_AS",this.state.webviewID,{eventName:"onPullDownRefresh",data:{},webviewID:this.state.webviewID})}n.info("WebviewBody.js message "+s+" "+JSON.stringify(e))},postMessage:function(e,t,s,i){var o=this,r={to:e,msg:t,command:s,ext:i};return r.webviewID=this.state.webviewID,r.id=this.id,this.port?(this.msgQuery.length&&(this.msgQuery.forEach(function(e){o.port.postMessage(e)}),this.msgQuery=[]),void this.port.postMessage(r)):void this.msgQuery.push(r)},_setInterfaceRes:function(e,t,s){"closeWindow"===t&&(0===e?this.webview.src="app/html/about.html":this.props.goBack(!0))},_setWebviewInfo:function(e){var t=e.ua;if(t){var s=i.getSetting(),o=s?s.version:a.defaultWechatVersion,r=t.replace("{{webviewID}}",this.state.webviewID).replace("{{version}}",o);this.webview.setUserAgentOverride(r),n.info("WebviewBody.js _setWebviewUA success "+t)}var c=e.version;if(c){var p=this.webview.getUserAgent(),u=p.match(/MicroMessenger\/(.*?)\s/)[1];this.webview.setUserAgentOverride(p.replace(u,c))}this.webview.reload()},_clearWebviewData:function(e){var t=e.callBack;delete e.callBack,this.webview.clearData({since:0},e,function(){t&&t(),n.info("WebviewBody.js _clearWebviewData success ")})},_touchSetSuc:function(){this.setWebviewSrc(this.props.href)},_didMount:function(){var e=this.refs.container,s=this.state.webviewID,o=this.webview=document.createElement("webview");o.className="simulator-bd-webview_body webviewbody"+this.state.webviewID,o.setAttribute("partition","persist:trusted"),e.appendChild(o),this.setUserAgentOverride(),this.addContentScripts(),this.initRuntime();var r=this.props.href;this.props.project?(t.on("TOUCH_SET_SUC_"+s,this._touchSetSuc),o.src="about:blank",o.addEventListener("consolemessage",function(e){var t=e.message;h[t]||(h[t]=!0,p(e))})):this.setWebviewSrc(r),this.initEvent(),this.initRequest(),this.permissionrequest(),t.on("SET_WEBVIEW_ACTION_"+s,this._setWebviewActions),t.on("GET_JSSDK_RES_"+s,this._getJSSDKRes),t.on("SET_INTERFACE_RES_"+s,this._setInterfaceRes),i.on("INIT_DEVTOOLS_SUCCESS"+s,this._successDevtools),t.on("SET_WEBVIEW_INFO",this._setWebviewInfo),t.on("CLEAR_WEBVIEW_DATA",this._clearWebviewData),t.on("STOP_PULL_DOWN_REFRESH",this._onStopPullDownRefresh)},_onStopPullDownRefresh:function(){this.postMessage("webframe",{},"STOP_PULL_DOWN_REFRESH")},_successDevtools:function(){this.postMessage("webframe",{},"INIT_DEVTOOLS_SUCCESS")},componentDidMount:function(){this.id=Math.random(),this.msgQuery=[],this.props.project&&0===this.state.webviewID?t.on("APPSERVICE_INIT",this._didMount):this._didMount()},componentWillUnmount:function(){var e=this.state.webviewID,s=global.contentDocumentBody.querySelector(".devtools"+e);s&&s.remove(),this.initDevtools=!1,t.removeListener("CLEAR_WEBVIEW_DATA",this._clearWebviewData),t.removeListener("APPSERVICE_INIT",this._didMount),t.removeListener("SET_WEBVIEW_ACTION_"+e,this._setWebviewActions),t.removeListener("GET_JSSDK_RES_"+e,this._getJSSDKRes),t.removeListener("SET_INTERFACE_RES_"+e,this._setInterfaceRes),t.removeListener("SET_WEBVIEW_INFO",this._setWebviewInfo),t.removeListener("STOP_PULL_DOWN_REFRESH",this._onStopPullDownRefresh),i.removeListener("INIT_DEVTOOLS_SUCCESS"+this.state.webviewID,this._successDevtools),this.props.project&&t.removeListener("TOUCH_SET_SUC_"+e,this._touchSetSuc),chrome.runtime.onConnect.removeListener(this._initport)},render:function(){return e.createElement("div",{className:"simulator-bd-webview",ref:"container"})}});_exports=l}var _exports;init(),module.exports=_exports;