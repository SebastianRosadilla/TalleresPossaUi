// Implementation regular expressions
/// <reference path='RegExp.ts' />

module Validation {

  export class Validation implements IValidation {

    private static REG_EXP: re.IRegExpr = new re.RegExpr();

    constructor(){};

    public userValidation(user: string): boolean {
      return Validation.REG_EXP.userRegExp().test(user);
    }


    public emailValidation(email: string): boolean {
      return Validation.REG_EXP.emailRegExp().test(email);
    }


    public passValidation(pass: string): boolean {
      return Validation.REG_EXP.passRegExp().test(pass);
    }

    public numValidation(num: number|string): boolean {
      var numStr: string;

      numStr = num.toString();

      return Validation.REG_EXP.numberRegExp().test(numStr);
    }
  }
}
