function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS = {
  AUTH: "/auth",
  APP: "/dashboard",
};

export const routes = {
  auth: {
    login: path(ROOTS.AUTH, "/login"),
    forgotPassword: path(ROOTS.AUTH, "/forgot_password"),
    resetPassword: path(ROOTS.AUTH, "/reset_password"),
  },
  app: {
    tableaudebord: path(ROOTS.APP, "/tableaudebord"),
    encaissement: path(ROOTS.APP, "/encaissement"),
  },
};
