import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddarticuloComponent } from './addarticulo.component';

describe('AddarticuloComponent', () => {
  let component: AddarticuloComponent;
  let fixture: ComponentFixture<AddarticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddarticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddarticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
