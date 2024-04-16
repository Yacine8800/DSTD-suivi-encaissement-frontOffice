import { IEmail } from "@/types/auth/IEmail.type";
import usermailTypes from "./mail.types";

interface IUpdateUserMail {
  type: usermailTypes.UPDATE_USER_MAIL;
  payload: IEmail;
}

export type UsermailAction = IUpdateUserMail;

export const updateUserMailConnected = (email: IEmail) => ({
  type: usermailTypes.UPDATE_USER_MAIL,
  payload: email,
});
