// Implementation regular expressions
/// <reference path='RegExp.ts' />

module Validation {

  export class Validation implements IValidation {

    private static REG_EXP: re.IRegExpr = new re.RegExpr();

    constructor(){};

    // min: 4 char
    // max: 20 char
    public userValidation(user: string): boolean {
      return Validation.REG_EXP.userRegExp().test(user);
    }


    public emailValidation(email: string): boolean {
      return Validation.REG_EXP.emailRegExp().test(email);
    }

    // At least:
    //   - an upper char
    //   - a down char
    //   - a number or an special char
    //   - min leegth: 8 char
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
