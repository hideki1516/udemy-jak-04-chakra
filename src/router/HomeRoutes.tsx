import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />
  },
  {
    path: '/user_management',
    exact: false,
    children: <UserManagement />
  },
  {
    path: '/setting',
    exact: false,
    children: <Setting />
  },
  // 上に属さない場合は<Page404>を表示。
  {
    path: '*',
    exact: false,
    children: <Page404 />
  },
];