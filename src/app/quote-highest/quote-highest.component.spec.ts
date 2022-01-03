import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteHighestComponent } from './quote-highest.component';

describe('QuoteHighestComponent', () => {
  let component: QuoteHighestComponent;
  let fixture: ComponentFixture<QuoteHighestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteHighestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteHighestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
