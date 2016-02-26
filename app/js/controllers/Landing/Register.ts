// Validation methods
/// <reference path='../../extra/expressions/Validations.ts' />

module Register {

  export class Register implements IRegister {

    private static VAL: Validation.IValidation = new Validation.Validation();

    constructor(
      private $http: ng.IHttpService
    ) {}

    public register(
        user: string,
        pass: string,
        repPass: string
    ): number {
      this.checkInfo(user, pass, repPass);
      return 0;
    }

    private checkInfo(
      user: string,
      pass: string,
      replyPass: string
    ): number {
      var err: number = 0,
					// User validation
					userVal: boolean = Register.VAL.userValidation(user),
					// Email validation
					emailVal: boolean = Register.VAL.emailValidation(user),
					// Password validation
					passVal: boolean = Register.VAL.passValidation(pass);

			if (user.length > 8 && (userVal || emailVal)) {
				if (pass.length > 8 && passVal) {
          if (pass === replyPass) {
            err = 1;
          }
				}
			}

  		return err;
    }
  }
}
