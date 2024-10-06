import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPipesLabComponent } from './angular-pipes-lab.component';

describe('AngularPipesLabComponent', () => {
  let component: AngularPipesLabComponent;
  let fixture: ComponentFixture<AngularPipesLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularPipesLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularPipesLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
