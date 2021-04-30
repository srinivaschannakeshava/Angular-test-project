import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieThumnailComponent } from './movie-thumnail.component';

describe('MovieThumnailComponent', () => {
  let component: MovieThumnailComponent;
  let fixture: ComponentFixture<MovieThumnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieThumnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieThumnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
