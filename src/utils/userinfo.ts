import { store } from "@/store";
import { IEmail } from "@/types/auth/IEmail.type";
import { IAuthData } from "@/types/auth/IUserConnect.type";

export const getCurrentUserInfo = () => {
  let userInfo!: IAuthData | null;

  if (
    store &&
    store?.getState()?.user &&
    store?.getState()?.user?.userConnected
  ) {
    userInfo = store?.getState()?.user?.userConnected;
  }
  return userInfo;
};

export const getCurrentMailInfo = () => {
  let userMaile!: IEmail | null;

  if (store && store?.getState()?.mail && store?.getState()?.mail?.userMail) {
    userMaile = store?.getState()?.mail?.userMail;
  }
  return userMaile;
};
