import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

export interface ApiItem {
  id: number;
  name: string;
  url: string;
  httpMethod: string;
  status: string;
}

@Component({
  selector: 'app-api-dashboard',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './api-dashboard.component.html',
  styleUrls: ['./api-dashboard.component.css']
})
export class ApiDashboardComponent implements OnInit {
  http = inject(HttpClient);
  router = inject(Router);
  apiItems: ApiItem[] = [];
  displayedColumns: string[] = ['id', 'name', 'url', 'httpMethod', 'status', 'actions'];

  ngOnInit(): void {
    this.getApiItems();
  }

  getApiItems(): void {
    this.http.get<ApiItem[]>('/api/ApiItems')
      .subscribe(data => {
        this.apiItems = data;
      });
  }

  testApi(id: number): void {
    this.http.post(`/api/Test/${id}`, null)
      .subscribe(response => {
        console.log(response);
        alert(`API test initiated. Check logs for details.`);
      }, error => {
        console.error(error);
        alert(`API test failed. Status: ${error.status}`);
      });
  }

  navigateToTestData(apiId: number): void {
    console.log(`Navigating to test data for API ID: ${apiId}`);
    this.router.navigate(['/apis', apiId, 'test-data']);
  }

  navigateToTestLogs(apiId: number): void {
    console.log(`Navigating to test logs for API ID: ${apiId}`);
    this.router.navigate(['/apis', apiId, 'test-logs']);
  }
}
