import { Injectable } from '@angular/core';
import { Libro } from './book-list/Libro';
import { BehaviorSubject } from 'rxjs';
import { BookUpdateService } from './book-update.service';

@Injectable({
  providedIn: 'root'
})
export class BookCartService {
  constructor(private bookUpdateService: BookUpdateService) { }

  private _shopList: Libro[] = [];
  private _totalPrice: number = 0;
  totalPrice: BehaviorSubject<number> = new BehaviorSubject(this._totalPrice);
   shopList: BehaviorSubject<Libro[]> = new BehaviorSubject(this._shopList);

  addToCart(libro: Libro) {
    let item: Libro | undefined = this._shopList.find((v1) => v1.id == libro.id);
    if(!item){
      this._shopList.push({...libro});
    }
    else{
      item.cantidad += libro.cantidad;
    }
    this.updateTotalPrice();
    this.shopList.next(this._shopList);

  }
  removeFromCart(libro: Libro) : Libro | undefined {
    let item: Libro | undefined = this._shopList.find((v1) => v1.id == libro.id);

    if (item) {
      if (item.cantidad > 1) {
        item.cantidad -= 1; // Decrementa la cantidad si hay más de uno
      } else {
        const index = this._shopList.indexOf(item);
        if (index > -1) {
          this._shopList.splice(index, 1); // Elimina el objeto si es el último
        }
      }
    }
    this.updateTotalPrice();
    this.shopList.next(this._shopList); // Notifica los cambios en la lista
    this.bookUpdateService.notifyBookUpdate(libro);
    return item;
  }
  private updateTotalPrice() {
    this._totalPrice = this._shopList.reduce((sum, libro) => sum + libro.precio * libro.cantidad, 0);
    this.totalPrice.next(this._totalPrice);
  }
}



