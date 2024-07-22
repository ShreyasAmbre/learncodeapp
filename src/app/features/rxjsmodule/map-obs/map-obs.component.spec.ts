import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapObsComponent } from './map-obs.component';

describe('MapObsComponent', () => {
  let component: MapObsComponent;
  let fixture: ComponentFixture<MapObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapObsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
