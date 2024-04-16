import { IAuthData } from "@/types/auth/IUserConnect.type";
import axios from "axios";

export const refreshAccessToken = (
  access_token: string
): Promise<IAuthData> => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
  return axios.get("users/tokens/refresh");
};
