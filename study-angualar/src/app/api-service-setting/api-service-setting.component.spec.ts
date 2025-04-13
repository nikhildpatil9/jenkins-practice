import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiServiceSettingComponent } from './api-service-setting.component';

describe('ApiServiceSettingComponent', () => {
  let component: ApiServiceSettingComponent;
  let fixture: ComponentFixture<ApiServiceSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiServiceSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiServiceSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
