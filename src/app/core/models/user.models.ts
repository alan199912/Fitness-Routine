export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  days: any;
  createdAt: string;
  updatedAt: string;
}

export interface GetUserResponse {
  getUser: User;
}

export interface ChooseDayResponse {
  choiseDay: User;
}
