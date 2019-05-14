import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerSaloonsComponent } from './partner-saloons.component';

describe('PartnerSaloonsComponent', () => {
  let component: PartnerSaloonsComponent;
  let fixture: ComponentFixture<PartnerSaloonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerSaloonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerSaloonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
