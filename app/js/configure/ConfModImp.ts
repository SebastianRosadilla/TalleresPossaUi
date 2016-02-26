/// <reference path="../_all.ts"/>

module app {

  export class Configuration {

    // Angular dependencies
    public static $inject = [
      '$stateProvider',
      '$urlRouterProvider',
      '$locationProvider',
    ];

    constructor(
      private $stateProvider: ng.ui.IStateProvider,
      private $urlRouterProvider: ng.ui.IUrlRouterProvider,
      private $locationProvider: ng.ILocationProvider
    ) {
        this.init();
    }

    private init(): void {
        this.$stateProvider.state("Home", Configuration.defaultState());
        this.$urlRouterProvider.otherwise('/');

        this.$locationProvider.html5Mode(true);
    }

    private static defaultState(): ng.ui.IState {
          return {
              url: "/",
              templateUrl: "Landing.html",
              controller: LandingCtrl,
              controllerAs: 'home'
          }
      }
  }
}
