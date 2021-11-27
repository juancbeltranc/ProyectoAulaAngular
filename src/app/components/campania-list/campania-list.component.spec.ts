import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaniaListComponent } from './campania-list.component';

describe('CampaniaListComponent', () => {
  let component: CampaniaListComponent;
  let fixture: ComponentFixture<CampaniaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaniaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaniaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
