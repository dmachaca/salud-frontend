import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPopConfirmation } from './c-pop-confirmation';

describe('CPopConfirmation', () => {
  let component: CPopConfirmation;
  let fixture: ComponentFixture<CPopConfirmation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CPopConfirmation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CPopConfirmation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
