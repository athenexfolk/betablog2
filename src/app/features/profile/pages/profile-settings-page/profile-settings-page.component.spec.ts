import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsPageComponent } from './profile-settings-page.component';

describe('ProfileSettingsPageComponent', () => {
  let component: ProfileSettingsPageComponent;
  let fixture: ComponentFixture<ProfileSettingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSettingsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
