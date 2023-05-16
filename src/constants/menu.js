import { adminRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [{
  id: "dashboards",
  icon: "iconsminds-shop-4",
  label: "menu.dashboards",
  to: `${adminRoot}/dashboards`,
  // roles: [UserRole.Admin, UserRole.Editor],
  subs: [
  {
    icon: "simple-icon-pie-chart",
    label: "menu.default",
    to: `${adminRoot}/dashboards/analytics`,
    // roles: [UserRole.Admin],
  }
  ]
},
{
  id: "iam",
  icon: "iconsminds-digital-drawing",
  label: "Usuários",
  to: `${adminRoot}/pages`,
  subs: [
    {
      id: "pages-product",
      label: "Gestão de Usuários",
      to: `${adminRoot}/pages/product`,
      subs: [
        {
          icon: "simple-icon-list",
          label: "Usuários",
          to: `${adminRoot}/pages/product/thumb-list`
        },
      ]
    },
  ]
},
{
  id: "system",
  icon: "iconsminds-gear",
  label: "Logout",
  to: `${adminRoot}/pages`,
  subs: [
    {
      id: "pages-product",
      label: "Sistema",
      to: `${adminRoot}/pages/product`,
      subs: [
        {
          icon: "simple-icon-list",
          label: "Sair do sistema",
          to: `${adminRoot}/`
        },
      ]
    },
  ]
},


];
export default data;
