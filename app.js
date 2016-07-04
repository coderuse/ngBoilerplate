(function (w) {
    'use strict';

    var a = w.angular, _ = w._;

    var vendor = ['ngSanitize', 'ui.router', 'ui.bootstrap'];
    var lib = [];
    var custom = [];

    var ngBoilerplateApp = a.module('ngBoilerplateApp', _.union(vendor, lib, custom));
}(window));