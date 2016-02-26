module errSys {

  export class ErrSys implements IErrSys {

    private static ERR_LIST: IErr[];

    constructor(){};

    // Return true if the object is in the ERR_LIST
    private exist(num: number): boolean {
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
    private err2string(err: IErr): string {
      var report: string = '',
          CodeErr: string = err.id.toString();

      report = report.concat(
        'Code Error: ', CodeErr,
        '\n\nName: ', err.name,
        '\nDescription: ', err.description,
        '\n\nDefault Solution: ', err.posSol
      );

      return report;
    }

    // PRE: exist(num)
    private search(num: number): IErr {
      var iter: number = 0;

      while(num !== ErrSys.ERR_LIST[iter].id) {
        iter ++;
      }

      return ErrSys.ERR_LIST[iter];
    }

    // Get a report about an err
    public getAll(num: number): string {
      var report: string = '';

      if (this.exist(num)) {
        report = this.err2string(this.search(num));
      }

      return report;
    }

    // Get name err
    public getNameErr(num: number): string {
      var name: string = '';

      if (this.exist(num)) {
        name = this.search(num).name;
      }

      return name;
    }

    // Get a posible solution for that error
    public getPosSol(num: number): string {
      var posSol: string = '';

      if (this.exist(num)) {
        posSol = this.search(num).posSol;
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

    // Set a error
    public report(
      num: number,
      name: string,
      description: string,
      posSol: string
    ): void {
      var err: IErr = new Err(num, name, description, posSol);

      ErrSys.ERR_LIST.push(err);
    }
  }
}
