import { TRootState } from "@/store";
import { createSelector } from "reselect";

export const selectUser = (state: TRootState) => state.user;
// export const selectOrganisation = (state: TRootState) => state.user.userConnected?.user.perimetreCIE.organisationId;

export const selectUserConnected = createSelector(
  [selectUser],
  (user) => user.userConnected
);

export const selectUserSidebarPermission = createSelector(
  [selectUser],
  (user) => user.userSidebarPermission
);

console.log(selectUserSidebarPermission);

// export const selectPidOrganisation = createSelector(
//   [selectUser],
//   (user) => user.userConnected?.user.organisations[0].organisation.id
// );

// export const selectPerimetre = createSelector(
//   [selectUser],
//   (user) => user.userConnected?.user.perimetreCIE.perimetre
// );
