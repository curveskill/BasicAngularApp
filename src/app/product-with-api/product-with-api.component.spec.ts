import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWithApiComponent } from './product-with-api.component';

describe('ProductWithApiComponent', () => {
  let component: ProductWithApiComponent;
  let fixture: ComponentFixture<ProductWithApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWithApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWithApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
