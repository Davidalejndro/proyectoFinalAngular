import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaccesorioComponent } from './editaccesorio.component';

describe('EditaccesorioComponent', () => {
  let component: EditaccesorioComponent;
  let fixture: ComponentFixture<EditaccesorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaccesorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
