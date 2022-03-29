// import axios from './core/index';

// import { LoginFormInterface } from '@templates/signIn/index.type';

// api 목록

export const singIn = ({ email, password }: any) => {
  console.log('email', email, 'password', password);
  return { ok: 200, message: '로그인 성공' };
};
