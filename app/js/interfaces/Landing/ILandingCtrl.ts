module app {

  export interface ILandingCtrl {
    name: string;
    email: string;
    subject: string;
    description: string;
    err: string;
    errDes: string;


    sendEmail(): void;
    clean(): void;
  }
}
