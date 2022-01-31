import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicOvenComponent } from './magic-oven.component';

describe('MagicOvenComponent', () => {
  let component: MagicOvenComponent;
  let fixture: ComponentFixture<MagicOvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicOvenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicOvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
