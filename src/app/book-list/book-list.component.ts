import { Component,OnInit, TestabilityRegistry } from '@angular/core';
import { Libro } from './Libro';
import { BookCartService } from '../book-cart.service';
import { BookUpdateService } from '../book-update.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {

    libros : Libro[] =[ {
      "id" : 1,
      "nombre" : "Sobre Heroes y Tumbas",
      "genero" : "Novela",
      "precio" : 30000,
      "stock" : 2,
      "image" : "assets/img/sobrehyt.jpeg",
      "clearance" : false,
      "cantidad" : 0,
    },
        {
      "id" : 2,
      "nombre" : "El nombre de la rosa",
      "genero" : "Novela historica",
      "precio" : 22000,
      "stock" : 4,
      "image" : "assets/img/endlrosa.jpeg",
      "clearance" : true,
      "cantidad" : 0,
    },
    {
      "id" : 3,
      "nombre" : "El resplandor",
      "genero" : "Terror",
      "precio" : 17500,
      "stock" : 0,
      "image" : "assets/img/endlrosa.jpeg",
      "clearance" : false,
      "cantidad" : 0,
    }

  ]


  ngOnInit() {
    this.libros = this.getLibros();
    this.bookUpdateService.bookUpdate$.subscribe(libro => this.updateStock(libro));
  }
  constructor(private cart: BookCartService,
              private bookUpdateService: BookUpdateService
  ){}

  addToCart(libro : Libro) :void{
    this.cart.addToCart(libro);
    libro.stock -= libro.cantidad;
    libro.cantidad = 0;
  }
  updateStock(libro: Libro) {
    let book = this.libros.find(b => b.id === libro.id);
    if (book) {
      book.stock += 1; // Incrementa el stock del libro
    }
  }
  getLibros() : Libro[]{
    return this.libros;
  }
}
