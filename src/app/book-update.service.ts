import { Injectable } from '@angular/core';
import { Libro } from './book-list/Libro';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookUpdateService {
  private bookUpdateSubject = new Subject<Libro>();
  bookUpdate$ = this.bookUpdateSubject.asObservable();

  notifyBookUpdate(libro: Libro) {
    this.bookUpdateSubject.next(libro);
  }

}



