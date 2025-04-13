import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivPositionComponent } from './div-position.component';

describe('DivPositionComponent', () => {
  let component: DivPositionComponent;
  let fixture: ComponentFixture<DivPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
