module app {

  export interface ILandingCtrl {

    // Login data
    lUser: string;
    lPassword: string;

    // Register data
    rUser: string;
    rPassword: string;
    rReplyPassword: string;

    login(): void;
		forgot(): void;
		register(): void;
  }
}
