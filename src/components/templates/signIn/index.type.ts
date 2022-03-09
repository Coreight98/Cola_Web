export interface SignInFormInterface {
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

export const SignInData = {
  email: {
    required: '이메일을 입력해주세요.',
  },
  password: {
    required: '비밀번호를 입력해주세요.',
  },
};

export const SignInType = {
  email: { placeholder: '이메일', type: 'text' },
  password: { placeholder: '비밀번호', type: 'password' },
};
