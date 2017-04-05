/*
 Copyright (c) 2015, Ben Schulz
 License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
*/
function f(a,d){return function(a,g,b){b.defineExtension("ko-grid-data-refresh",{G:["ko-grid-toolbar"],M:function(e){e.into("left-toolbar").insert(' <label class="ko-grid-toolbar-button ko-grid-data-refresh-label" data-bind="css: { pressed: extensions.dataRefresh.__state }, visible: extensions.dataRefresh.__visible">  <input type="checkbox" tabIndex="-1" class="ko-grid-data-refresh-toggle" data-bind="checked: extensions.dataRefresh.__state" />  Data Refresh</label> ')},w:function(e){var c=g.observable(!1),
a=g.observable(!0);this.__state=c;this.__visible=a;this.enter=function(){return c(!0)};var b=e.refreshCommand;if(b)var d=c.subscribe(function(a){a&&(b(),c(!1))});else a(!1);this.dispose=function(){return d.dispose()}}});return b.declareExtensionAliases(["datarefresh","dataRefresh"],"ko-grid-data-refresh")}({},d,a)}
"function"===typeof define&&define.amd?define(["ko-grid","knockout","ko-grid-view-modes","ko-data-source","ko-indexed-repeat"],f):window["ko-grid-data-refresh"]=f(window.ko.bindingHandlers.grid,window.ko);