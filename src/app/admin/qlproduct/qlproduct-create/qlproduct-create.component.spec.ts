import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlproductCreateComponent } from './qlproduct-create.component';

describe('QlproductCreateComponent', () => {
  let component: QlproductCreateComponent;
  let fixture: ComponentFixture<QlproductCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlproductCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlproductCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
