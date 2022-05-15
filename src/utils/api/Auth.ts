import Api from './core';

const Auth = {
  async checkEmail(email: string) {
    const { data } = await Api.post('/api/v1/auth/mail', { email });
    return data;
  },
  async checkEmailCode(token: string) {
    const { data } = await Api.post('/api/v1/auth/confirm', { token });
    return data;
  },
};
export default Auth;
