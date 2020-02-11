import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexCardComponent } from './forex-card.component';

describe('ForexCardComponent', () => {
  let component: ForexCardComponent;
  let fixture: ComponentFixture<ForexCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForexCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForexCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
