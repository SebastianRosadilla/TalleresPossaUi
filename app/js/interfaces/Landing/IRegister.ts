module Register {

  export interface IRegister {

    register(
      user: string,
      pass: string,
      repPass: string
    ): number;
  }
}
