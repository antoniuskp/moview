import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RateMoviePage } from './rate-movie.page';

describe('RateMoviePage', () => {
  let component: RateMoviePage;
  let fixture: ComponentFixture<RateMoviePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RateMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
