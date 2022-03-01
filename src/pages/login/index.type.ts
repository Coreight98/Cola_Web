export interface LoginFormInterface {
  email: string;
  password: string;
}
interface InvalidType {
  message: string;
  ref: HTMLInputElement;
  type: string;
}

export interface InvalidFormInterface {
  email?: InvalidType | undefined;
  password?: InvalidType | undefined;
}
