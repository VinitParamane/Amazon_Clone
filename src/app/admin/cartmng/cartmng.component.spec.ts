import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartmngComponent } from './cartmng.component';

describe('CartmngComponent', () => {
  let component: CartmngComponent;
  let fixture: ComponentFixture<CartmngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartmngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartmngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
