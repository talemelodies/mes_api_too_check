import { Routes } from '@angular/router';
import { ApiDashboardComponent } from './api-dashboard/api-dashboard.component';
import { TestDataComponent } from './test-data/test-data.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { TestLogsComponent } from './test-logs/test-logs.component';

export const routes: Routes = [
    { path: '', component: MainDashboardComponent },
    { path: 'apis', component: ApiDashboardComponent },
    { path: 'apis/:id/test-data', component: TestDataComponent },
    { path: 'apis/:id/test-logs', component: TestLogsComponent }
];
