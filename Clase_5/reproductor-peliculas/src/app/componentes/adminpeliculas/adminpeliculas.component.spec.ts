import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpeliculasComponent } from './adminpeliculas.component';

describe('AdminpeliculasComponent', () => {
  let component: AdminpeliculasComponent;
  let fixture: ComponentFixture<AdminpeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
