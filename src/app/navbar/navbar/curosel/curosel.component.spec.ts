import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuroselComponent } from './curosel.component';

describe('CuroselComponent', () => {
  let component: CuroselComponent;
  let fixture: ComponentFixture<CuroselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuroselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
