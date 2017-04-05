'use strict';

module.exports = function (grunt) {
    require('grunt-commons')(grunt, {
        name: 'ko-grid-data-refresh',
        main: 'data-refresh',
        internalMain: 'data-refresh',

        shims: {
            knockout: 'window.ko',
            'ko-grid': 'window.ko.bindingHandlers[\'grid\']'
        }
    }).initialize({
        less: true
    });
};
