Proyecto de Librería Online
  Este proyecto es una aplicación web para la gestión y compra de libros en línea. La aplicación permite a los usuarios navegar por una lista de libros, agregar libros al carrito de compras, y gestionar el stock de los libros.

Estructura del Proyecto
  Componentes Principales:

    BookListComponent: Muestra la lista de libros disponibles, incluyendo información como nombre, género, precio, stock y una opción para agregar al carrito de compras.
    
    InputIntegerComponent: Permite a los usuarios seleccionar la cantidad de libros que desean comprar dentro del límite del stock disponible.

    ShoppingCartComponent: Muestra los libros que han sido agregados al carrito de compras, junto con la cantidad de cada libro y el total del precio.

Servicios:

  BookCartService: Maneja la lógica del carrito de compras, incluyendo agregar y remover libros del carrito, y calcular el precio total.

  BookUpdateService: Notifica actualizaciones en el stock de los libros a otros componentes.

Rutas:

  /libreria: Página principal que muestra la lista de libros.

  /about: Página con información adicional sobre la librería.






# Libreria

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
