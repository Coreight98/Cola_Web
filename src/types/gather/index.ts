export interface IUser {
  name: string;
  enrollmentDate: number;
  x: number;
  y: number;
  direction: string;
  state?: string;
  cId: string;
}
export interface IChat {
  text: string;
  name: string;
  cId: string;
  date: number;
  id: string;
}
export interface IUsers {
  [key: number]: IUser;
}
