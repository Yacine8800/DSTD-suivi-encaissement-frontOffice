import { createSelector } from "reselect";
import { TRootState } from "../..";

const selectuserMail = (state: TRootState) => state.mail;

export const selectMailUser = createSelector(
  [selectuserMail],
  (mail) => mail.userMail
);
