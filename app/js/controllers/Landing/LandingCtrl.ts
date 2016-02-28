/// <reference path='../../_all.ts' />

module app {
	'use strict';

	/**
	 * The main controller for the app. The controller:
	 * - retrieves and persists the model via the todoStorage service
	 * - exposes the model to the template and provides event handlers
	 */
	export class LandingCtrl implements ILandingCtrl {

		// $inject annotation.
		// It provides $injector with information about dependencies to be injected into constructor
		// it is better to have it close to the constructor, because the parameters must match in count and type.
		// See http://docs.angularjs.org/guide/di
		public static $inject = [
			'$http'
		];

		private static $HTTP: ng.IHttpService;
		// dependencies are injected via AngularJS $injector
		// controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
		constructor(
			$http: ng.IHttpService
		) {
				LandingCtrl.$HTTP = $http;
	      this.initJQ();
		}

		private initJQ(): void {
			// Register effect
			$(document).ready(() => {});
		}

		public sendEmail(): void {

		}

		private working(): void {
			alert('Sorry... We still working on this section');
			console.log('Sorry... We still working on this section');
		}
	}
}
