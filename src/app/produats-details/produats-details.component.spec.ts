import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduatsDetailsComponent } from './produats-details.component';

describe('ProduatsDetailsComponent', () => {
  let component: ProduatsDetailsComponent;
  let fixture: ComponentFixture<ProduatsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduatsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduatsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
