import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVShowComponent } from './tv-show.component';

describe('TVShowComponent', () => {
  let component: TVShowComponent;
  let fixture: ComponentFixture<TVShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TVShowComponent]
    });
    fixture = TestBed.createComponent(TVShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
