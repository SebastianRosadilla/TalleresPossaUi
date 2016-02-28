module errSys {

  export class ErrSys implements IErrSys {

    private static ERR_LIST: IErr[];

    constructor(){
      this._defErrs();
    }

    // Default errors
    private _defErrs() {
      ErrSys.ERR_LIST = [

        // User Login UI errors
        new Err(
          1001,
          'Fail Login UserName',
          'FaiLogUsr',
          'Incorrect format for Login UserName or email',
          '-min 8 char\n'
        ),
        new Err(
          1002,
          'Fail Login Password',
          'FaiLogPas',
          'Incorrect format for Login Password',
          '-min 8 char'
        ),
        new Err(
          1003,
          'User Disable',
          'UsrDis',
          'User in use',
          '-Try other user'
        ),
        // User Register UI errors
        new Err(
          1101,
          'Fail Register UserName',
          'FaiRegUsr',
          'Incorrect format for Register UserName',
          '-min 8 char'
        ),
        new Err(
          1102,
          'Fail Register Password',
          'FaiRegPas',
          'Incorrect format for Register Password',
          '-min 8 char\n-1 special char\n-1 upper char'
        ),
        new Err(
          1103,
          'Incorrect Password match',
          'IncPasMat',
          'Password and Reply Password not match',
          '-Verify the Password and Reply Password'
        ),
        // Connection
        new Err(
          401,
          'Unauthorized',
          'Unauthorized',
          'Request Unauthorized',
          '-Permissors error'
        ),
        new Err(
          403,
          'Forbidden',
          'Forbidden',
          'Fail Authentication',
          '-Data wrong or fail request'
        ),
        new Err(
          404,
          'Not Found',
          'Not Found',
          'Page Not Found',
          '-You do not have connection, or server fail'
        )
      ];
    }

    // Return true if the object is in the ERR_LIST
    private _exist(num: number): boolean {
      var exist: boolean = false,
          cant: number = ErrSys.ERR_LIST.length,
          iter: number = 0;

      if (ErrSys.ERR_LIST.length > 0) {
        while (!exist && iter < cant) {
          exist = ErrSys.ERR_LIST[iter].id === num;
          iter++;
        }
      }

      return exist;
    }

    // Generate a report from a err
    private _err2string(err: IErr): string {
      var report: string = '',
          CodeErr: string = err.id.toString();

      report = report.concat(
        'Code Error: ', CodeErr,
        '\n\nName: ', err.name,
        '\nAbbreviation: ', err.avr,
        '\nDescription: ', err.description,
        '\n\nDefault Solution: \n', err.posSol
      );

      return report;
    }

    // PRE: _exist(num)
    private _search(num: number): IErr {
      var iter: number = 0;

      while(num !== ErrSys.ERR_LIST[iter].id) {
        iter ++;
      }

      return ErrSys.ERR_LIST[iter];
    }

    // Get a report about an err
    public getAll(num: number): string {
      var report: string = '';

      if (this._exist(num)) {
        report = this._err2string(this._search(num));
      }

      return report;
    }

    // Get name err
    public getNameErr(num: number): string {
      var name: string = '';

      if (this._exist(num)) {
        name = this._search(num).name;
      }

      return name;
    }

    // Get avrebbation
    public getAvrErr(num: number): string {
      var avr: string = '';

      if (this._exist(num)) {
        avr = this._search(num).avr;
      }

      return avr;
    }

    // Get a posible solution for that error
    public getPosSol(num: number): string {
      var posSol: string = '';

      if (this._exist(num)) {
        posSol = this._search(num).posSol;
      }

      return posSol;
    }

    // Get objet windows
    public getUserInfo(): Window {
      return new Window();
    }

    // Get a error list
    public getListErr(): string[] {
      var errors: string[] = [],
          legth = ErrSys.ERR_LIST.length;

      for (var i = 0; i < length; i++) {
        errors.push(ErrSys.ERR_LIST[i].name);
      }

      return errors;
    }

    // Get id error from avrebbation
    public getId(avr: string): number {
      var iter: number = 0,
          id: number = -1,
          length: number = ErrSys.ERR_LIST.length,
          found: boolean = false;

      while (iter < length && !found) {
        if (ErrSys.ERR_LIST[iter].avr === avr) {
          found = true;
          id = ErrSys.ERR_LIST[iter].id;
        }
        iter++;
      }

      return id;
    }

    // Set a error
    public report(
      num: number,
      name: string,
      description: string,
      posSol: string
    ): void {
      var err: IErr,
          id: number = num;

      while (this._exist(id)) {
        id++;
      }

      err = new Err(num, name, description, posSol);
      ErrSys.ERR_LIST.push(err);
    }
  }
}
