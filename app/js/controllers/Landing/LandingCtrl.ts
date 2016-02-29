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
			'$http',
			'SystErrs'
		];

		private static _$HTTP: ng.IHttpService;
		private static _SYS_ERRS: errSys.IErrSys;
		private static _VAL: Validation.IValidation;

		// Form variables
		public name: string = 'kasjndkasjndkjasnjkd';
		public email: string = 'ksajad@akjsnd.com';
		public subject: string = 'asjdjasbhdajshbdsbhadhabsdjhbasjbhdas';
		public description: string = 'asdbnashbdsbadabsdbasbdabsdbasjdbsabdjabsdbasbdshbadbasdjbasbdsbadjhsbad';

		// Form error description
		public err: string = '';
		public errDes: string = '';

		// dependencies are injected via AngularJS $injector
		// controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
		constructor(
			$http: ng.IHttpService,
			SystErrs: errSys.IErrSys
		) {
				LandingCtrl._$HTTP = $http;
				LandingCtrl._SYS_ERRS = SystErrs;
				LandingCtrl._VAL = new Validation.Validation();

	      this._initJQ();
		}

		private _initJQ(): void {
			$(document).ready(function () {
				var swiper: Swiper = new Swiper('.swiper-container', {
						loop: true,
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
						autoplay: 5000,
						simulateTouch: true
		    });
				$('.arrow-left').on('click', function(e){
			    e.preventDefault();
			    swiper.slideNext();
			  });
			  $('.arrow-right').on('click', function(e){
			    e.preventDefault();
			    swiper.slideNext();
			  });
			})
		}

		private checkInfo(): number {
			var err: number = 0,
					iter: number = 0,
					namMinLeng: number = 4,
					subMinLeng: number = 10,
					desMinLeng: number = 30,
					valData: boolean[] = [
						false,
						false,
						false,
						false
					],
					errs: string[] = [
						'FaiForNam',
						'FaiForEma',
						'FaiForSub',
						'FaiForDes'
					];

			// Check data Length
		  valData[0] = this.name.length >= namMinLeng;
			valData[1] = this.subject.length >= subMinLeng;
			valData[2] = this.description.length >= desMinLeng;

			// Email validation
			valData[3] = LandingCtrl._VAL.emailValidation(this.email);

			while (iter < valData.length && valData[iter]) {
				iter++;
			}

			if (valData[iter] === true) {
				err = 0;
			} else {
				err = LandingCtrl._SYS_ERRS.getId(errs[iter]);
			}

			return err;
		}

		public clean():void {
			this.name= '';
			this.email= '';
		 	this.subject = '';
			this.description = '';
		}

		public sendEmail(): void {
			var val: number = this.checkInfo();

			// if (val === 0) {
				// Send data message to API
				LandingCtrl._$HTTP({
					method: 'POST',
					url: 'http://127.0.0.1:8000/email',
					headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		      data: $.param({
		       name: this.name,
		       email: this.email,
					 subject: this.subject,
					 description: this.description
		      })
				}).then(function (result) {
						this.clean();
		        alert(result);
		    }, function (error) {
		        alert(error);
		    });
			// } else {
			// 	this.err = LandingCtrl._SYS_ERRS.getNameErr(val);
			// 	this.errDes = LandingCtrl._SYS_ERRS.getPosSol(val);
			// }
		}

		private working(): void {
			alert('Sorry... We still working on this section');
			console.log('Sorry... We still working on this section');
		}
	}
}
