import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercadeExperienciaComponent } from './acercade-experiencia.component';

describe('AcercadeExperienciaComponent', () => {
  let component: AcercadeExperienciaComponent;
  let fixture: ComponentFixture<AcercadeExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercadeExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercadeExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
