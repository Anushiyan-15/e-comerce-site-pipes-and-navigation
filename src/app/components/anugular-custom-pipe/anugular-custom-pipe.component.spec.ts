import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnugularCustomPipeComponent } from './anugular-custom-pipe.component';

describe('AnugularCustomPipeComponent', () => {
  let component: AnugularCustomPipeComponent;
  let fixture: ComponentFixture<AnugularCustomPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnugularCustomPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnugularCustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
