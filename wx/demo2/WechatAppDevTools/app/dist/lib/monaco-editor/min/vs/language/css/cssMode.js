/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-css version: 1.1.3-next.1(01cf2aeea87f334353d288c309970c6a2c7e5fd0)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-css/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define("vs/language/css/workerManager",["require","exports"],e)}(function(e,n){function t(e){var n,t,i=new r(function(e,r){n=e,t=r},function(){});return e.then(n,t),i}var r=monaco.Promise,i=12e4,o=function(){function e(e){var n=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return n._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return n._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){if(this._worker){var e=Date.now()-this._lastUsedTime;e>i&&this._stopWorker()}},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e=this,n=[],r=0;r<arguments.length;r++)n[r-0]=arguments[r];var i;return t(this._getClient().then(function(e){i=e}).then(function(t){return e._worker.withSyncedResources(n)}).then(function(e){return i}))},e}();n.WorkerManager=o}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define("vscode-languageserver-types/main",["require","exports"],e)}(function(e,n){var t;!function(e){function n(e,n){return{line:e,character:n}}function t(e){var n=e;return x.defined(n)&&x.number(n.line)&&x.number(n.character)}e.create=n,e.is=t}(t=n.Position||(n.Position={}));var r;!function(e){function n(e,n,r,i){if(x.number(e)&&x.number(n)&&x.number(r)&&x.number(i))return{start:t.create(e,n),end:t.create(r,i)};if(t.is(e)&&t.is(n))return{start:e,end:n};throw new Error("Range#create called with invalid arguments["+e+", "+n+", "+r+", "+i+"]")}function r(e){var n=e;return x.defined(n)&&t.is(n.start)&&t.is(n.end)}e.create=n,e.is=r}(r=n.Range||(n.Range={}));var i;!function(e){function n(e,n){return{uri:e,range:n}}function t(e){var n=e;return x.defined(n)&&r.is(n)&&(x.string(n.uri)||x.undefined(n.uri))}e.create=n,e.is=t}(i=n.Location||(n.Location={}));var o;!function(e){function n(e,n,t,r,i){var o={range:e,message:n};return x.defined(t)&&(o.severity=t),x.defined(r)&&(o.code=r),x.defined(i)&&(o.source=i),o}function t(e){var n=e;return x.defined(n)&&r.is(n.range)&&x.string(n.message)&&(x.number(n.severity)||x.undefined(n.severity))&&(x.number(n.code)||x.string(n.code)||x.undefined(n.code))&&(x.string(n.source)||x.undefined(n.source))}e.create=n,e.is=t}(o=n.Diagnostic||(n.Diagnostic={}));var u;!function(e){function n(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={title:e,command:n};return x.defined(t)&&t.length>0&&(i.arguments=t),i}function t(e){var n=e;return x.defined(n)&&x.string(n.title)&&x.string(n.title)}e.create=n,e.is=t}(u=n.Command||(n.Command={}));var a;!function(e){function n(e,n){return{range:e,newText:n}}function t(e,n){return{range:{start:e,end:e},newText:n}}function r(e){return{range:e,newText:""}}e.replace=n,e.insert=t,e.del=r}(a=n.TextEdit||(n.TextEdit={}));var s=function(){function e(){this.workspaceEdit={changes:Object.create(null)},this.textEditChanges=Object.create(null)}return Object.defineProperty(e.prototype,"edit",{get:function(){return this.workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){var n=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,n){this.edits.push(a.insert(e,n))},e.prototype.replace=function(e,n){this.edits.push(a.replace(e,n))},e.prototype["delete"]=function(e){this.edits.push(a.del(e))},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}(),t=this.textEditChanges[e];if(!t){var r=[];this.workspaceEdit.changes[e]=r,t=new n(r),this.textEditChanges[e]=t}return t},e}();n.WorkspaceChange=s;var c;!function(e){function n(e){return{uri:e}}function t(e){var n=e;return x.defined(n)&&x.string(n.uri)}e.create=n,e.is=t}(c=n.TextDocumentIdentifier||(n.TextDocumentIdentifier={}));var f;!function(e){function n(e,n){return{uri:e,version:n}}function t(e){var n=e;return x.defined(n)&&x.string(n.uri)&&x.number(n.version)}e.create=n,e.is=t}(f=n.VersionedTextDocumentIdentifier||(n.VersionedTextDocumentIdentifier={}));var d;!function(e){function n(e,n,t,r){return{uri:e,languageId:n,version:t,text:r}}function t(e){var n=e;return x.defined(n)&&x.string(n.uri)&&x.string(n.languageId)&&x.number(n.version)&&x.string(n.text)}e.create=n,e.is=t}(d=n.TextDocumentItem||(n.TextDocumentItem={}));var l;!function(e){function n(e){return{label:e}}e.create=n}(l=n.CompletionItem||(n.CompletionItem={}));var g;!function(e){function n(e,n){return{items:e?e:[],isIncomplete:!!n}}e.create=n}(g=n.CompletionList||(n.CompletionList={}));var p;!function(e){function n(e,n){return n?{label:e,documentation:n}:{label:e}}e.create=n}(p=n.ParameterInformation||(n.ParameterInformation={}));var h;!function(e){function n(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={label:e};return x.defined(n)&&(i.documentation=n),x.defined(t)?i.parameters=t:i.parameters=[],i}e.create=n}(h=n.SignatureInformation||(n.SignatureInformation={}));var m;!function(e){function n(e,n){var t={range:e};return x.number(n)&&(t.kind=n),t}e.create=n}(m=n.DocumentHighlight||(n.DocumentHighlight={}));var v;!function(e){function n(e,n,t,r,i){var o={name:e,kind:n,location:{uri:r,range:t}};return i&&(o.containerName=i),o}e.create=n}(v=n.SymbolInformation||(n.SymbolInformation={}));var y;!function(e){function n(e){return{diagnostics:e}}function t(e){var n=e;return x.defined(n)&&x.typedArray(n.diagnostics,o.is)}e.create=n,e.is=t}(y=n.CodeActionContext||(n.CodeActionContext={}));var _;!function(e){function n(e,n){var t={range:e};return x.defined(n)&&(t.data=n),t}function t(e){var n=e;return x.defined(n)&&r.is(n.range)&&(x.undefined(n.command)||u.is(n.command))}e.create=n,e.is=t}(_=n.CodeLens||(n.CodeLens={}));var b;!function(e){function n(e,n){return{tabSize:e,insertSpaces:n}}function t(e){var n=e;return x.defined(n)&&x.number(n.tabSize)&&x["boolean"](n.insertSpaces)}e.create=n,e.is=t}(b=n.FormattingOptions||(n.FormattingOptions={}));var w;!function(e){function n(e,n,t,r){return new k(e,n,t,r)}function t(e){var n=e;return!!(x.defined(n)&&x.string(n.uri)&&(x.undefined(n.languageId)||x.string(n.languageId))&&x.number(n.lineCount)&&x.func(n.getText)&&x.func(n.positionAt)&&x.func(n.offsetAt))}e.create=n,e.is=t}(w=n.TextDocument||(n.TextDocument={}));var x,k=function(){function e(e,n,t,r){this._uri=e,this._languageId=n,this._version=t,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(){return this._content},e.prototype.update=function(e,n){this._content=e.text,this._version=n,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],n=this._content,t=!0,r=0;r<n.length;r++){t&&(e.push(r),t=!1);var i=n.charAt(r);t="\r"===i||"\n"===i,"\r"===i&&r+1<n.length&&"\n"===n.charAt(r+1)&&r++}t&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var n=this.getLineOffsets(),r=0,i=n.length;if(0===i)return t.create(0,e);for(;r<i;){var o=Math.floor((r+i)/2);n[o]>e?i=o:r=o+1}var u=r-1;return t.create(u,e-n[u])},e.prototype.offsetAt=function(e){var n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;var t=n[e.line],r=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(t+e.character,r),t)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();!function(e){function n(e){return"undefined"!=typeof e}function t(e){return"undefined"==typeof e}function r(e){return e===!0||e===!1}function i(e){return"[object String]"===s.call(e)}function o(e){return"[object Number]"===s.call(e)}function u(e){return"[object Function]"===s.call(e)}function a(e,n){return Array.isArray(e)&&e.every(n)}var s=Object.prototype.toString;e.defined=n,e.undefined=t,e["boolean"]=r,e.string=i,e.number=o,e.func=u,e.typedArray=a}(x||(x={}))}),define("vscode-languageserver-types",["vscode-languageserver-types/main"],function(e){return e}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define("vs/language/css/languageFeatures",["require","exports","vscode-languageserver-types"],e)}(function(e,n){function t(e){switch(e){case 1:return monaco.Severity.Error;case 2:return monaco.Severity.Warning;case 3:case 4:default:return monaco.Severity.Info}}function r(e,n){var r="number"==typeof n.code?String(n.code):n.code;return{severity:t(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:r,source:n.source}}function i(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function o(e){if(e)return new h(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function u(e){var n=monaco.languages.CompletionItemKind;switch(e){case 1:return n.Text;case 2:return n.Method;case 3:return n.Function;case 4:return n.Constructor;case 5:return n.Field;case 6:return n.Variable;case 7:return n.Class;case 8:return n.Interface;case 9:return n.Module;case 10:return n.Property;case 11:return n.Unit;case 12:return n.Value;case 13:return n.Enum;case 14:return n.Keyword;case 15:return n.Snippet;case 16:return n.Color;case 17:return n.File;case 18:return n.Reference}return n.Property}function a(e){if(e)return{range:o(e.range),text:e.newText}}function s(e){if(e)return Array.isArray(e)?e:[e]}function c(e){switch(e){case 2:return monaco.languages.DocumentHighlightKind.Read;case 3:return monaco.languages.DocumentHighlightKind.Write;case 1:return monaco.languages.DocumentHighlightKind.Text}return monaco.languages.DocumentHighlightKind.Text}function f(e){return{uri:p.parse(e.uri),range:o(e.range)}}function d(e){if(e&&e.changes){var n=[];for(var t in e.changes)for(var r=e.changes[t],i=0,u=r;i<u.length;i++){var a=u[i];n.push({resource:p.parse(t),range:o(a.range),newText:a.newText})}return{edits:n}}}function l(e){var n=monaco.languages.SymbolKind;switch(e){case 1:return n.Array;case 2:return n.Module;case 3:return n.Namespace;case 4:return n.Package;case 5:return n.Class;case 6:return n.Method;case 7:return n.Property;case 8:return n.Field;case 9:return n.Constructor;case 10:return n.Enum;case 11:return n.Interface;case 12:return n.Function;case 13:return n.Variable;case 14:return n.Constant;case 15:return n.String;case 16:return n.Number;case 17:return n.Boolean;case 18:return n.Array}return n.Function}function g(e,n){return e.onCancellationRequested(function(){return n.cancel()}),n}var p=(e("vscode-languageserver-types"),monaco.Uri),h=monaco.Range,m=function(){function e(e,n){var t=this;this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null);var r=function(e){var n=e.getModeId();if(n===t._languageId){var r;t._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(r),r=setTimeout(function(){return t._doValidate(e.uri,n)},500)}),t._doValidate(e.uri,n)}},i=function(e){monaco.editor.setModelMarkers(e,t._languageId,[]),delete t._listener[e.uri.toString()]};this._disposables.push(monaco.editor.onDidCreateModel(r)),this._disposables.push(monaco.editor.onWillDisposeModel(i)),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){i(e.model),r(e.model)})),this._disposables.push({dispose:function(){for(var e in t._listener)t._listener[e].dispose()}}),monaco.editor.getModels().forEach(r)}return e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._doValidate=function(e,n){this._worker(e).then(function(n){return n.doValidation(e.toString())}).then(function(t){var i=t.map(function(n){return r(e,n)});monaco.editor.setModelMarkers(monaco.editor.getModel(e),n,i)}).done(void 0,function(e){console.error(e)})},e}();n.DiagnostcsAdapter=m;var v=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,n,t){var r=(e.getWordUntilPosition(n),e.uri);return g(t,this._worker(r).then(function(e){return e.doComplete(r.toString(),i(n))}).then(function(e){if(e){var n=e.items.map(function(e){return{label:e.label,insertText:e.insertText,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,kind:u(e.kind),textEdit:a(e.textEdit)}});return{isIncomplete:e.isIncomplete,items:n}}}))},e}();n.CompletionAdapter=v;var y=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,n,t){var r=e.uri;return g(t,this._worker(r).then(function(e){return e.doHover(r.toString(),i(n))}).then(function(e){if(e)return{range:o(e.range),contents:s(e.contents)}}))},e}();n.HoverAdapter=y;var _=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,n,t){var r=e.uri;return g(t,this._worker(r).then(function(e){return e.findDocumentHighlights(r.toString(),i(n))}).then(function(e){if(e)return e.map(function(e){return{range:o(e.range),kind:c(e.kind)}})}))},e}();n.DocumentHighlightAdapter=_;var b=function(){function e(e){this._worker=e}return e.prototype.provideDefinition=function(e,n,t){var r=e.uri;return g(t,this._worker(r).then(function(e){return e.findDefinition(r.toString(),i(n))}).then(function(e){if(e)return[f(e)]}))},e}();n.DefinitionAdapter=b;var w=function(){function e(e){this._worker=e}return e.prototype.provideReferences=function(e,n,t,r){var o=e.uri;return g(r,this._worker(o).then(function(e){return e.findReferences(o.toString(),i(n))}).then(function(e){if(e)return e.map(f)}))},e}();n.ReferenceAdapter=w;var x=function(){function e(e){this._worker=e}return e.prototype.provideRenameEdits=function(e,n,t,r){var o=e.uri;return g(r,this._worker(o).then(function(e){return e.doRename(o.toString(),i(n),t)}).then(function(e){return d(e)}))},e}();n.RenameAdapter=x;var k=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,n){var t=e.uri;return g(n,this._worker(t).then(function(e){return e.findDocumentSymbols(t.toString())}).then(function(e){if(e)return e.map(function(e){return{name:e.name,containerName:e.containerName,kind:l(e.kind),location:f(e.location)}})}))},e}();n.DocumentSymbolAdapter=k}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define("vs/language/css/cssMode",["require","exports","./workerManager","./languageFeatures"],e)}(function(e,n){function t(e){var n=[],t=new r.WorkerManager(e);n.push(t);var o=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return t.getLanguageServiceWorker.apply(t,[e].concat(n))},u=e.languageId;n.push(monaco.languages.registerCompletionItemProvider(u,new i.CompletionAdapter(o))),n.push(monaco.languages.registerHoverProvider(u,new i.HoverAdapter(o))),n.push(monaco.languages.registerDocumentHighlightProvider(u,new i.DocumentHighlightAdapter(o))),n.push(monaco.languages.registerDefinitionProvider(u,new i.DefinitionAdapter(o))),n.push(monaco.languages.registerReferenceProvider(u,new i.ReferenceAdapter(o))),n.push(monaco.languages.registerDocumentSymbolProvider(u,new i.DocumentSymbolAdapter(o))),n.push(monaco.languages.registerRenameProvider(u,new i.RenameAdapter(o))),n.push(new i.DiagnostcsAdapter(u,o))}var r=e("./workerManager"),i=e("./languageFeatures");n.setupMode=t});