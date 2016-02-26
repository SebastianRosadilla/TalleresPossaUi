/// <reference path='../../_all.ts' />
// Login logic
/// <reference path='Register.ts'/>
// Register Logic
/// <reference path='Login.ts'/>

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

		private static LOGIN_CTRL: Login.ILogin;
    private static REGISTER_CTRL: Register.IRegister;

		// Login data
    public lUser: string = '';
    public lPassword: string = '';

    // Register data
    public rUser: string = '';
    public rPassword: string = '';
    public rReplyPassword: string = '';

		// dependencies are injected via AngularJS $injector
		// controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
		constructor(
			private $http: ng.IHttpService
		) {
	      this.initJQ();
				this.initV();
		}

		private initV(): void {
			LandingCtrl.LOGIN_CTRL = new Login.Login(this.$http);
			LandingCtrl.REGISTER_CTRL = new Register.Register(this.$http);
		}

		private initJQ(): void {
			// Register effect
			$(document).ready(() => {});
		}

		// Send data user to API
		public login(): void {
			LandingCtrl.LOGIN_CTRL.login(
				this.lUser,
				this.lPassword
			)
		}

		public forgot(): void {
			this.working();
		}

		public register(): void {
			LandingCtrl.REGISTER_CTRL.register(
				this.rUser,
				this.rPassword,
				this.rReplyPassword
			)
		}

		private working(): void {
			alert('Sorry... We still working on this section');
			console.log('Sorry... We still working on this section');
		}
	}
}
