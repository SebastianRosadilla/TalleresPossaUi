module re {

  export interface IRegExpr {

    // min: 4 char
    // max: 20 char
    userRegExp(): RegExp;

		emailRegExp(): RegExp;


    // At least:
    //   - an upper char
    //   - a down char
    //   - a number or an special char
    //   - min leegth: 8 char
		passRegExp(): RegExp;

    numberRegExp(): RegExp;
  }
}
