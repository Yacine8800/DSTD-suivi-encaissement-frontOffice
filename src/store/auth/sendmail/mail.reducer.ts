// import { TUser } from "@/features/auth/types",
import usermailTypes from "./mail.types";
import { UsermailAction } from "./mail.action";
import { IEmail } from "@/types/auth/IEmail.type";

interface IUserMailReducerState {
  userMail: IEmail | null;
}

const INITIAL_STATE = {
  userMail: {
    email: "",
  },
};

const mailReducer = (
  state: IUserMailReducerState = INITIAL_STATE,
  action: UsermailAction
): IUserMailReducerState => {
  switch (action.type) {
    case usermailTypes.UPDATE_USER_MAIL:
      return {
        ...state,
        userMail: action.payload,
      };
    default:
      return state;
  }
};

export default mailReducer;
