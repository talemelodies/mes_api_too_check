import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestData } from './models/test-data.model';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {
  private http = inject(HttpClient);
  private apiUrl = '/api/TestData';

  getTestDataByApiId(apiId: number): Observable<TestData[]> {
    return this.http.get<TestData[]>(`${this.apiUrl}/ByApi/${apiId}`);
  }

  addTestData(testData: TestData): Observable<TestData> {
    return this.http.post<TestData>(this.apiUrl, testData);
  }

  updateTestData(id: number, testData: TestData): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, testData);
  }

  deleteTestData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
