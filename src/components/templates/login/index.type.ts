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

export const SignInType = {
  email: { placeholder: '이메일', type: 'text' },
  password: { placeholder: '비밀번호', type: 'password' },
};
