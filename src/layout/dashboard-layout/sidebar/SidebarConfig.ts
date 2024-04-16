import { routes } from "@/config/routes";

export type SidebarConfigDto = {
  title: string;
  description: string;
  module: string;
  icon: string;
};

const sidebarConfig = [
  {
    title: "TABLEAU DE BORD",
    description: "description",
    module: "DESCRIPTION • TABLEAU DE BORD",
    icon: "/assets/icon/treom_icon.svg",
    path: routes.app.tableaudebord,
  },
  {
    title: "Encaissement",
    description: "description",
    module: "DESCRIPTION • ENCAISSEMENT",
    icon: "/assets/icon/tva_icon.svg",
    path: routes.app.encaissement,
  },
];

export default sidebarConfig;
