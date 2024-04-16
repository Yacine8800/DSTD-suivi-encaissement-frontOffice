export type TConnection = {
  login: string;
  password: string;
};

export type IToken = {
  access_token: string;
  refresh_token: string;
};

export type TResetPassword = {
  otp: string;
  password: string;
  confirm_password: string;
};
export type TChangePassword = {
  email: string | null;
};

export type TFirstChangePassword = {
  custom_password: string;
  old_password: string;
  login: string | null;
};
