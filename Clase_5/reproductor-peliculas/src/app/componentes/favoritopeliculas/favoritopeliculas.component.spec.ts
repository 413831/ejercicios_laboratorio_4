import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritopeliculasComponent } from './favoritopeliculas.component';

describe('FavoritopeliculasComponent', () => {
  let component: FavoritopeliculasComponent;
  let fixture: ComponentFixture<FavoritopeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritopeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritopeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
