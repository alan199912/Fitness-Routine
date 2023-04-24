export interface Day {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetDaysResponse {
  days: Day[];
}
