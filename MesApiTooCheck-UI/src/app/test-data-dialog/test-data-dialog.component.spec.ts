import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDataDialogComponent } from './test-data-dialog.component';

describe('TestDataDialogComponent', () => {
  let component: TestDataDialogComponent;
  let fixture: ComponentFixture<TestDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestDataDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
