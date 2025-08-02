import { Routes } from '@angular/router';
import { ApiDashboardComponent } from './api-dashboard/api-dashboard.component';
import { TestDataComponent } from './test-data/test-data.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { TestLogsComponent } from './test-logs/test-logs.component';
import { FigmaPageComponent } from './figma-page/figma-page.component';

export const routes: Routes = [
    { path: '', component: FigmaPageComponent },
    { path: 'dashboard', component: FigmaPageComponent },
    { path: 'apis', component: ApiDashboardComponent },
    { path: 'apis/:id/test-data', component: TestDataComponent },
    { path: 'apis/:id/test-logs', component: TestLogsComponent }
];
