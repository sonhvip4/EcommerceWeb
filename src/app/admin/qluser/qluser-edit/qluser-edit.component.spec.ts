import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QluserEditComponent } from './qluser-edit.component';

describe('QluserEditComponent', () => {
  let component: QluserEditComponent;
  let fixture: ComponentFixture<QluserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QluserEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QluserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
