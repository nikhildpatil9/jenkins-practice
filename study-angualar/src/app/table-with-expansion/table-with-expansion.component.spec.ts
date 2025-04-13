import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithExpansionComponent } from './table-with-expansion.component';

describe('TableWithExpansionComponent', () => {
  let component: TableWithExpansionComponent;
  let fixture: ComponentFixture<TableWithExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWithExpansionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
