import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopRegistroUsuario } from './pop-registro-usuario';

describe('PopRegistroUsuario', () => {
  let component: PopRegistroUsuario;
  let fixture: ComponentFixture<PopRegistroUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopRegistroUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopRegistroUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
