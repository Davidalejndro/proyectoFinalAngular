import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailaccesorioComponent } from './detailaccesorio.component';

describe('DetailaccesorioComponent', () => {
  let component: DetailaccesorioComponent;
  let fixture: ComponentFixture<DetailaccesorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailaccesorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailaccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
