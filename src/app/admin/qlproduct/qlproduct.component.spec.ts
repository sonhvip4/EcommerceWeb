import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlproductComponent } from './qlproduct.component';

describe('QlproductComponent', () => {
  let component: QlproductComponent;
  let fixture: ComponentFixture<QlproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
