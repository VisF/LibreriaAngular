import { Component,Input,OnInit, Output, EventEmitter } from '@angular/core';
import { Libro } from '../book-list/Libro';




@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit{

@Input()
  cantidad!: number;
@Input()
  max! : number;

@Output() cantidadChange: EventEmitter<number> = new EventEmitter<number>();


ngOnInit(): void {

}



restarCantidad():void  {
  if(this.cantidad>0){
    this.cantidad--;
    this.cantidadChange.emit(this.cantidad);
  }
}
addToCart(libro: Libro):void  {
throw new Error('Method not implemented.');
}
sumarCantidad():void  {
  if(this.cantidad< this.max){
    this.cantidad++;
    this.cantidadChange.emit(this.cantidad);
  }
}
onChangeQuantity($event: KeyboardEvent): void {
  let target = $event.target as HTMLInputElement;
  const inputValue = target.value;
  const parsedValue = parseInt(inputValue, 10);

  if (isNaN(parsedValue) || parsedValue <= 0 || parsedValue > this.max) {
    console.log("Error en la cantidad puesta de libros a comprar");
    target.value = '0';
    //this.actualizarCantidad();
  } else {
    this.cantidad = parsedValue;
    //this.actualizarCantidad();
  }
}

}
