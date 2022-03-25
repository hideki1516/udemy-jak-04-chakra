import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { homeRoutes } from "./HomeRoutes";

// homeRouterに属さない場合のみ、404ページを表示させる。
// → path='*'は上のRouteに属さない場合に表示させるという意味。
// → Router.tsxのhomeRouterに<Page404 />を追加。
// → homeRouterに<Page404 />を設定しておかないと、「/home/xxx」でも404ページが表示されない。

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>

      <Route path='/home' render={({ match: { url } }) => (
        <Switch>
          {homeRoutes.map((route) => (
            <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
              {route.children}
            </Route>
          ))}
        </Switch>
      )} />

      <Route path='*'>
        <Page404 />
      </Route>
    </Switch>
  )
});