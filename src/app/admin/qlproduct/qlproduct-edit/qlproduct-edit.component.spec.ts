import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlproductEditComponent } from './qlproduct-edit.component';

describe('QlproductEditComponent', () => {
  let component: QlproductEditComponent;
  let fixture: ComponentFixture<QlproductEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlproductEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlproductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
