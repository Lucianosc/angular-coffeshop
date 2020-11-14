import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeshopAboutComponent } from './coffeshop-about.component';

describe('CoffeshopAboutComponent', () => {
  let component: CoffeshopAboutComponent;
  let fixture: ComponentFixture<CoffeshopAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeshopAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeshopAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
