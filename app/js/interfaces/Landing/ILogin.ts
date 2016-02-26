module Login {

  export interface ILogin {

    login(user: string, pass: string): number;
  }
}
