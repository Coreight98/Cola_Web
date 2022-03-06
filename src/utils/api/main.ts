import axios from './core/index';

import { LoginFormInterface } from 'src/pages/login/index.type';
// api 목록

export const singIn = ({ email, password }: LoginFormInterface) => {
  console.log('email', email, 'password', password);
  return { ok: 200, message: '로그인 성공' };
};

export default {
  singIn,
};
