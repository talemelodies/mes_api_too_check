import { Component, Input, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { TestLog } from '../models/test-log.model';

@Component({
  selector: 'app-test-log-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './test-log-list.component.html',
  styleUrls: ['./test-log-list.component.css']
})
export class TestLogListComponent implements OnInit {
  @Input() apiItemId!: number;
  http = inject(HttpClient);
  testLogs: TestLog[] = [];

  ngOnInit(): void {
    if (this.apiItemId) {
      this.getTestLogs();
    }
  }

  getTestLogs(): void {
    this.http.get<TestLog[]>(`/api/TestLogs/ByApi/${this.apiItemId}`)
      .subscribe(data => {
        this.testLogs = data;
      });
  }
}
