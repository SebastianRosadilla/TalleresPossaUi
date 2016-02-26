module errSys {

  export interface IErrSys {
    // Get a report about an err
    getAll(num: number): string;

    // Get name err
    getNameErr(num: number): string;

    // Get a posible solution for that error
    getPosSol(num: number): string;

    // Get objet windows
    getUserInfo(): Window;

    // Get a error list
    getListErr(): string[];

    // Set a error
    report(
      num: number,
      name: string,
      description: string,
      posSol: string
    ): void;
  }
}
