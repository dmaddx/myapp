import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaordComponent } from './baord.component';

describe('BaordComponent', () => {
  let component: BaordComponent;
  let fixture: ComponentFixture<BaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
