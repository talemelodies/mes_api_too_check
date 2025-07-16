import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ApiItem } from '../api-dashboard/api-dashboard.component';

export interface TestLog {
  id: number;
  apiItemId: number;
  apiItem: ApiItem;
  testTimestamp: Date;
  httpStatusCode: number;
  responseBody: string;
}

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css'
})
export class MainDashboardComponent implements OnInit {
  http = inject(HttpClient);
  apiStatusCounts: { [key: string]: number } = { Healthy: 0, Unhealthy: 0, Unknown: 0 };
  recentLogs: TestLog[] = [];

  ngOnInit(): void {
    this.getApiStatusCounts();
    this.getRecentLogs();
  }

  getApiStatusCounts(): void {
    this.http.get<ApiItem[]>('/api/ApiItems').subscribe(data => {
      this.apiStatusCounts = data.reduce((acc: { [key: string]: number }, item) => {
        acc[item.status] = (acc[item.status] || 0) + 1;
        return acc;
      }, { Healthy: 0, Unhealthy: 0, Unknown: 0 });
    });
  }

  getRecentLogs(): void {
    this.http.get<TestLog[]>('/api/TestLogs').subscribe(data => {
      this.recentLogs = data.slice(0, 5); // Get latest 5 logs
    });
  }
}
