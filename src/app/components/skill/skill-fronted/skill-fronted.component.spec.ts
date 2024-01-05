import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillFrontedComponent } from './skill-fronted.component';

describe('SkillFrontedComponent', () => {
  let component: SkillFrontedComponent;
  let fixture: ComponentFixture<SkillFrontedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillFrontedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillFrontedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
