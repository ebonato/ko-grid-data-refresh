'use strict';

var toolbar = 'ko-grid-toolbar';

define(['module', 'knockout', 'ko-grid', toolbar], function (module, ko, koGrid) {
    var extensionId = module.id.indexOf('/') < 0 ? module.id : module.id.substring(0, module.id.indexOf('/'));

    koGrid.defineExtension(extensionId, {
        dependencies: [toolbar],
        initializer: template => {
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

            this.enter = () => state(true);
            this.exit = () => state(false);

            var refresh = bindingValue['refreshCommand'];
            
            if (refresh) {
                var stateSubscription = state.subscribe(function (newState) {
                    if (newState) {
                        refresh();
                        state(false);
                    } else {

                    }
                });
            }
            else
            {
                visible(false);
            }

            this.dispose = () => stateSubscription.dispose();
        }
    });

    return koGrid.declareExtensionAliases(['datarefresh', 'dataRefresh'], extensionId);
});
