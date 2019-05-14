import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaloonsListComponent } from './saloons-list.component';

describe('SaloonsListComponent', () => {
  let component: SaloonsListComponent;
  let fixture: ComponentFixture<SaloonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaloonsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaloonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
