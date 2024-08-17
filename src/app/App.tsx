import { Navigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "~/layouts/DefaultLayout";

import { useAppSelector } from "../redux/hooks";
import { authRoutesData, routesData } from "./utils/routes";
import { TRoute } from "./utils/types";

function App() {
  const { isAuth } = useAppSelector((state) => state.auth);
  const routes = isAuth ? routesData : authRoutesData;

  const renderElement = (route: TRoute) => (
    <DefaultLayout
      title={route?.title}
      withHeader={route?.withHeader}
      withSidebar={route?.withSidebar}
      element={<route.element />}
    />
  );

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={renderElement(route)}
        />
      ))}
      <Route
        path="*"
        element={<Navigate to={isAuth ? "/users" : "/sign-in"} replace />}
      />
    </Routes>
  );
}

export default App;
