import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeshopShopComponent } from './coffeshop-shop.component';

describe('CoffeshopShopComponent', () => {
  let component: CoffeshopShopComponent;
  let fixture: ComponentFixture<CoffeshopShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeshopShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeshopShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
