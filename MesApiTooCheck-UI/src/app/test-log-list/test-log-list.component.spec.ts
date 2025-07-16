import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLogListComponent } from './test-log-list.component';

describe('TestLogListComponent', () => {
  let component: TestLogListComponent;
  let fixture: ComponentFixture<TestLogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestLogListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
