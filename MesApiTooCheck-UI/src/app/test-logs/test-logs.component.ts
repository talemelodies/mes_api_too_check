import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TestLog } from '../models/test-log.model';

@Component({
  selector: 'app-test-logs',
  standalone: true,
  imports: [CommonModule, RouterLink, MatListModule, MatIconModule, MatCardModule, MatButtonModule],
  templateUrl: './test-logs.component.html',
  styleUrls: ['./test-logs.component.css']
})
export class TestLogsComponent implements OnInit {
  route = inject(ActivatedRoute);
  http = inject(HttpClient);
  testLogs: TestLog[] = [];
  apiItemId!: number;

  ngOnInit(): void {
    this.apiItemId = Number(this.route.snapshot.paramMap.get('id'));
    this.getTestLogs();
  }

  getTestLogs(): void {
    this.http.get<TestLog[]>(`/api/TestLogs/ByApi/${this.apiItemId}`)
      .subscribe(data => {
        this.testLogs = data;
      });
  }
}
