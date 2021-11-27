import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaniaDetailsComponent } from './campania-details.component';

describe('CampaniaDetailsComponent', () => {
  let component: CampaniaDetailsComponent;
  let fixture: ComponentFixture<CampaniaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaniaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaniaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
