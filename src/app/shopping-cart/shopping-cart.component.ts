import { Component } from '@angular/core';
import { BookCartService } from '../book-cart.service';
import { Libro } from '../book-list/Libro';
import { Observable } from 'rxjs';
import { BookUpdateService } from '../book-update.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {

  shopList$: Observable <Libro[]>;
  total:number = 0;


  constructor(private cart: BookCartService,
              private bookUpdateService :BookUpdateService
  ){
    this.shopList$ = cart.shopList.asObservable();
    this.calculateTotal();
  }


  addToCart(libro : Libro) :void{
    this.cart.addToCart(libro);
    this.calcularSuma(libro);
    console.log(libro);

  }
  calcularSuma(libro : Libro) : void{
    this.total = libro.cantidad*libro.precio;
  }
  calculateTotal(): void {
  this.shopList$.subscribe(libros => {
      libros.forEach(libro => {
        this.total += libro.precio;
      });
    });
    console.log(this.total);
  }
  remove(libro: Libro) {
    libro.stock = 1;
    const updatedLibro = this.cart.removeFromCart(libro);
    if (updatedLibro) {
      this.bookUpdateService.notifyBookUpdate(updatedLibro);
    }
    this.calculateResta(libro);
  }
  updateStock(libro : Libro){
    libro.stock += 1;
  }
  calculateResta(libro : Libro): void {
    this.total -= libro.precio;
    console.log(this.total);
  }

}
