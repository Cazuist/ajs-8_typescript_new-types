import Buyable from './Buyable';
import Info from './Info';


export default class Movie implements Buyable, Info {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly info: any,
    readonly isMultiple: boolean = false,    
  ) { }
}