// Validation methods
/// <reference path='../../extra/expressions/Validations.ts' />

module Login {
  'use strict';

  export class Login implements ILogin {

    private static VAL: Validation.IValidation = new Validation.Validation();

    constructor(
      private $http: ng.IHttpService
    ){}

    login(user: string, pass: string): number {
      this.checkInfo(user, pass);
      return 0;
    }

    private checkInfo(user: string, pass: string): number {
			var err: number = 0,
					// User validation
					userVal: boolean = Login.VAL.userValidation(user),
					// Email validation
					emailVal: boolean = Login.VAL.emailValidation(user),
					// Password validation
					passVal: boolean = Login.VAL.passValidation(pass);

			if (user.length > 8 && (userVal || emailVal)) {
				if (pass.length > 8 && passVal) {
					err = 1;
				}
			}

  		return err;
		}
  }
}
