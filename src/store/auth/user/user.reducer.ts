import { IAuthData } from "@/types/auth/IUserConnect.type";
import { UserAction } from "./user.action";
import { setCookie } from "cookies-next";

import userTypes from "./user.types";

interface IUserReducerState {
  userConnected: IAuthData | null;
  userSidebarPermission: string[];
  isLoading: boolean;
}

const INITIAL_STATE = {
  userConnected: null,
  userSidebarPermission: [],
  isLoading: false,
};

const userReducer = (
  state: IUserReducerState = INITIAL_STATE,
  action: UserAction
): IUserReducerState => {
  switch (action.type) {
    case userTypes.UPDATE_USER_CONNECTE:
      setCookie("token", action.payload.access_token);
      return {
        ...state,
        userConnected: action.payload,
      };
    case userTypes.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case userTypes.UPDATE_USER_SIDEBAR_PERMISSION:
      return {
        ...state,
        userSidebarPermission: action.payload,
      };
    case userTypes.CLEAR_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
