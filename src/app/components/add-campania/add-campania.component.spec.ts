import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampaniaComponent } from './add-campania.component';

describe('AddCampaniaComponent', () => {
  let component: AddCampaniaComponent;
  let fixture: ComponentFixture<AddCampaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCampaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCampaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
