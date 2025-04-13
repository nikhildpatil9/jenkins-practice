import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewModuleComponent } from './my-new-module.component';

describe('MyNewModuleComponent', () => {
  let component: MyNewModuleComponent;
  let fixture: ComponentFixture<MyNewModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNewModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
