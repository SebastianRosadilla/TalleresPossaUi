module errSys {

  export class ErrSys implements IErrSys {

    private static ERR_LIST: IErr[];

    constructor(){
      this._defErrs();
    }

    // Default errors
    private _defErrs() {
      ErrSys.ERR_LIST = [

        // Form errs
        new Err(
          1001,
          'Fail Form Name',
          'FaiForNam',
          'Nombre invalido',
          '-min 4 letras'
        ),
        new Err(
          1002,
          'Fail Form Email',
          'FaiForEma',
          'Email invalido',
          'Verifique su direccion de email'
        ),
        new Err(
          1003,
          'Fail Form Subject',
          'FaiForSub',
          'Asunto de mensaje invalido',
          '-min 10 letras'
        ),
        new Err(
          1004,
          'Fail Form Description',
          'FaiForDes',
          'Descripcion de mensaje invalida',
          '-min 30 letras'
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
