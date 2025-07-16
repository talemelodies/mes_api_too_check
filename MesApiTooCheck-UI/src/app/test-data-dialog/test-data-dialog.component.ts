import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TestData } from '../models/test-data.model';

@Component({
  selector: 'app-test-data-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './test-data-dialog.component.html',
  styleUrls: ['./test-data-dialog.component.css']
})
export class TestDataDialogComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TestDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { testData: TestData, apiItemId: number },
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: [data.testData?.name || '', Validators.required],
      content: [data.testData?.content || '', Validators.required],
      contentType: [data.testData?.contentType || 'application/json', Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.form.valid) {
      this.dialogRef.close({ ...this.data.testData, ...this.form.value, apiItemId: this.data.apiItemId });
    }
  }
}
