module re {

  export class RegExpr implements IRegExpr {

    constructor(){};

    public userRegExp(): RegExp {
			return new RegExp(
				'/^[a-z\d_]{8,20}$/i'
			);
		}

		public emailRegExp(): RegExp {
			return new RegExp(
				'^[_a-z0-9-]+(\.[_a-z0-9-]+)'
				+'*@[a-z0-9-]+(\.[a-z0-9-]+)*'
				+'(\.[a-z]{2,3})$'
			);
		}

		public passRegExp(): RegExp {
			return new RegExp(
		     '(?=^.{8,}$)((?=.*\d)|'
					+'(?=.*\W+))(?![.\n])'
					+'(?=.*[A-Z])(?=.*[a-z]).*$'
				);
		}

    public numberRegExp(): RegExp {
      return new RegExp(
          '^\+?\d{1,3}?[- .]?\(?(?:\d'
          +'{2,3})\)?[- .]?\d\d\d[- .]?'
          +'\d\d\d\d$'
      );
    }
  }
}
