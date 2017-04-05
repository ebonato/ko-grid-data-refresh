/**
 * @license Copyright (c) 2015, Ben Schulz
 * License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
 */
;(function(factory) {
    if (typeof define === 'function' && define['amd'])
        define(['ko-grid', 'knockout', 'ko-grid-view-modes', 'ko-data-source', 'ko-indexed-repeat'], factory);
    else
        window['ko-grid-data-refresh'] = factory(window.ko.bindingHandlers['grid'], window.ko);
} (function(ko_grid, knockout) {
var ko_grid_data_refresh_data_refresh, ko_grid_data_refresh;

var toolbar = 'ko-grid-toolbar';
ko_grid_data_refresh_data_refresh = function (module, ko, koGrid) {
  var extensionId = 'ko-grid-data-refresh'.indexOf('/') < 0 ? 'ko-grid-data-refresh' : 'ko-grid-data-refresh'.substring(0, 'ko-grid-data-refresh'.indexOf('/'));
  koGrid.defineExtension(extensionId, {
    dependencies: [toolbar],
    initializer: function (template) {
      template.into('left-toolbar').insert([
        ' <label class="ko-grid-toolbar-button ko-grid-data-refresh-label" data-bind="css: { pressed: extensions.dataRefresh.__state }, visible: extensions.dataRefresh.__visible">',
        '  <input type="checkbox" tabIndex="-1" class="ko-grid-data-refresh-toggle" data-bind="checked: extensions.dataRefresh.__state" />',
        '  Data Refresh',
        '</label> '
      ].join(''));
    },
    Constructor: function DataRefreshExtension(bindingValue, config, grid) {
      var state = ko.observable(false);
      var visible = ko.observable(true);
      this['__state'] = state;
      this['__visible'] = visible;
      this.enter = function () {
        return state(true);
      };
      this.exit = function () {
        return state(false);
      };
      var refresh = bindingValue['refreshCommand'];
      if (refresh) {
        var stateSubscription = state.subscribe(function (newState) {
          if (newState) {
            refresh();
            state(false);
          } else {
          }
        });
      } else {
        visible(false);
      }
      this.dispose = function () {
        return stateSubscription.dispose();
      };
    }
  });
  return koGrid.declareExtensionAliases([
    'datarefresh',
    'dataRefresh'
  ], extensionId);
}({}, knockout, ko_grid);
ko_grid_data_refresh = function (main) {
  return main;
}(ko_grid_data_refresh_data_refresh);return ko_grid_data_refresh;
}));