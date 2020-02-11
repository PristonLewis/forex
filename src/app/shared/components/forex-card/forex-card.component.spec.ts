import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexCardComponent } from './forex-card.component';
import { FormsModule } from '@angular/forms';

describe('ForexCardComponent', () => {
  let component: ForexCardComponent;
  let fixture: ComponentFixture<ForexCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForexCardComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForexCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should trigger the emit', () => {
    expect(component.confirm()).toHaveBeenCalled();
  });
});
