import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QluserCreateComponent } from './qluser-create.component';

describe('QluserCreateComponent', () => {
  let component: QluserCreateComponent;
  let fixture: ComponentFixture<QluserCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QluserCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QluserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
