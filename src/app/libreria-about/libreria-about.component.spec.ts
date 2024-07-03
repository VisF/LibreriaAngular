import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreriaAboutComponent } from './libreria-about.component';

describe('LibreriaAboutComponent', () => {
  let component: LibreriaAboutComponent;
  let fixture: ComponentFixture<LibreriaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibreriaAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibreriaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
