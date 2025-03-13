import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwethaComponent } from './swetha.component';

describe('SwethaComponent', () => {
  let component: SwethaComponent;
  let fixture: ComponentFixture<SwethaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwethaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwethaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
