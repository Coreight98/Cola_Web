export const emailOption = { required: true };

export const PwdOption = {
  required: true,
  minLength: {
    value: 5,
    message: 'Password should be longer than 5',
  },
};
