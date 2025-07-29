import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLegalComponent } from './header-legal.component';

describe('HeaderLegalComponent', () => {
  let component: HeaderLegalComponent;
  let fixture: ComponentFixture<HeaderLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLegalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
