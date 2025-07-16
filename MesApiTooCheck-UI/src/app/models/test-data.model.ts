import { ApiItem } from "../api-dashboard/api-dashboard.component";

export interface TestData {
  id: number;
  name: string;
  content: string;
  contentType: 'application/json' | 'application/xml';
  apiItemId: number;
  apiItem?: ApiItem;
}