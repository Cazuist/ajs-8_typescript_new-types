import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    const id = item.id;
    const isInList = this.items.find((item) => item.id === id);

    if (isInList && item.isMultiple === false) {
      return;
    }
    
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items]; 
  }

  getCartPrice(discount: number = 0): number {
    const items = this.items;    	
    const sumOfPrices: number = items.reduce((curr, item) => curr + item.price, 0);

    const countedPrice: number = sumOfPrices * (1 - discount / 100 );
  
    return countedPrice;
  }

  removeItem(id: number): void {
    this._items = this._items.filter((item) => item.id !== id);
  }
}