import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLogsComponent } from './test-logs.component';

describe('TestLogsComponent', () => {
  let component: TestLogsComponent;
  let fixture: ComponentFixture<TestLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
