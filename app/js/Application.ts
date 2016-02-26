/// <reference path='_all.ts' />

/**
 * The main TodoMVC app module.
 *
 * @type {angular.Module}
 */
module app {
    'use strict';

    var dependencies = [
      'ui.router',
      'templates'
    ]

    var app = angular.module('app', dependencies)
              .config((
                    $stateProvider: ng.ui.IStateProvider,
                    $urlRouterProvider: ng.ui.IUrlRouterProvider,
                    $locationProvider: ng.ILocationProvider
                  ) => {
                        return new Configuration(
                          $stateProvider,
                          $urlRouterProvider,
                          $locationProvider
                        );
                });
}
