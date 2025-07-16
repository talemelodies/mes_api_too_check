import { ApiItem } from "../api-dashboard/api-dashboard.component";

export interface TestLog {
  id: number;
  apiItemId: number;
  apiItem?: ApiItem;
  testTimestamp: Date;
  httpStatusCode: number;
  responseBody: string;
  errorMessage: string;
}