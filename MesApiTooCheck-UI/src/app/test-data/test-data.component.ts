import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TestDataService } from '../test-data.service';
import { TestData } from '../models/test-data.model';

@Component({
  selector: 'app-test-data',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.css']
})
export class TestDataComponent implements OnInit {
  route = inject(ActivatedRoute);
  testDataService = inject(TestDataService);
  testData: TestData[] = [];
  displayedColumns: string[] = ['id', 'name', 'contentType', 'actions'];
  selectedTestData: Partial<TestData> = {};
  apiItemId!: number;

  ngOnInit(): void {
    this.apiItemId = Number(this.route.snapshot.paramMap.get('id'));
    this.getTestData();
  }

  getTestData(): void {
    this.testDataService.getTestDataByApiId(this.apiItemId)
      .subscribe(data => {
        this.testData = data;
      });
  }

  saveTestData(): void {
    const dataToSave = { ...this.selectedTestData, apiItemId: this.apiItemId };
    if ('id' in dataToSave && dataToSave.id) {
      // Update existing
      this.testDataService.updateTestData(dataToSave.id, dataToSave as TestData)
        .subscribe(() => {
          this.getTestData();
          this.selectedTestData = {};
        });
    } else {
      // Add new
      this.testDataService.addTestData(dataToSave as TestData)
        .subscribe(() => {
          this.getTestData();
          this.selectedTestData = {};
        });
    }
  }

  editTestData(item: TestData): void {
    this.selectedTestData = { ...item };
  }

  deleteTestData(id: number): void {
    this.testDataService.deleteTestData(id)
      .subscribe(() => {
        this.testData = this.testData.filter(item => item.id !== id);
      });
  }

  cancelEdit(): void {
    this.selectedTestData = {};
  }
}
