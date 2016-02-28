module errSys {

  export class Err implements IErr {

    constructor(
      public id: number = 0,
      public name: string = '',
      public avr: string = '',
      public description: string = '',
      public posSol: string = ''
    ) {}
  }
}
