// Reference to Regular Expressions
/// <reference path='IRegExp.ts' />

module Validation {

  export interface IValidation {
    // min: 4 char
    // max: 20 char
    userValidation(user: string): boolean;

    emailValidation(email: string): boolean;

    // At least:
    //   - an upper char
    //   - a down char
    //   - a number or an special char
    //   - min leegth: 8 char
    passValidation(pass: string): boolean;

    numValidation(num: number|string): boolean;
  }
}
