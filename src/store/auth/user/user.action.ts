import { IAuthData } from "@/types/auth/IUserConnect.type";
import userTypes from "./user.types";

interface IUpdateUserConnected {
  type: userTypes.UPDATE_USER_CONNECTE;
  payload: IAuthData;
}

interface ISetLoading {
  type: userTypes.SET_LOADING;
}

interface IClearLoading {
  type: userTypes.CLEAR_LOADING;
}

interface IUpdateUserSidebarPermission {
  type: userTypes.UPDATE_USER_SIDEBAR_PERMISSION;
  payload: string[];
}

export type UserAction =
  | IUpdateUserConnected
  | ISetLoading
  | IUpdateUserSidebarPermission
  | IClearLoading;

export const updateUserConnected = (user: IAuthData) => ({
  type: userTypes.UPDATE_USER_CONNECTE,
  payload: user,
});

export const setLoading = () => ({
  type: userTypes.SET_LOADING,
});

export const updateUserSidebarPermission = (
  userSidebarPermission: string[]
) => ({
  type: userTypes.UPDATE_USER_SIDEBAR_PERMISSION,
  payload: userSidebarPermission,
});

export const clearLoading = () => ({
  type: userTypes.CLEAR_LOADING,
});
