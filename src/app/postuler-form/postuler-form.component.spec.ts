import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulerFormComponent } from './postuler-form.component';

describe('PostulerFormComponent', () => {
  let component: PostulerFormComponent;
  let fixture: ComponentFixture<PostulerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostulerFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostulerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
