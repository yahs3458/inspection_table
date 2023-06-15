import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablComponent } from './tabl.component';

describe('TablComponent', () => {
  let component: TablComponent;
  let fixture: ComponentFixture<TablComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablComponent]
    });
    fixture = TestBed.createComponent(TablComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
