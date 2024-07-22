import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfFromObsComponent } from './of-from-obs.component';

describe('OfFromObsComponent', () => {
  let component: OfFromObsComponent;
  let fixture: ComponentFixture<OfFromObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfFromObsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfFromObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
