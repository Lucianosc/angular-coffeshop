import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeshopHomeComponent } from './coffeshop-home.component';

describe('CoffeshopHomeComponent', () => {
  let component: CoffeshopHomeComponent;
  let fixture: ComponentFixture<CoffeshopHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeshopHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeshopHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
