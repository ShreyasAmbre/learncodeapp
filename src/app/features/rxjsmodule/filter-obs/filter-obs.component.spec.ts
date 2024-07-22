import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterObsComponent } from './filter-obs.component';

describe('FilterObsComponent', () => {
  let component: FilterObsComponent;
  let fixture: ComponentFixture<FilterObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterObsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
