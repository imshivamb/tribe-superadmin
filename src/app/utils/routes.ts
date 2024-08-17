import SignIn from "~/pages/sign-in";
import Users from "~/pages/users";

import { TRoute } from "./types";

export const authRoutesData: TRoute[] = [
  {
    title: "Sign In",
    path: "sign-in",
    element: SignIn,
    withHeader: false,
    withSidebar: false,
  },
];

export const routesData: TRoute[] = [
  {
    title: "Users",
    path: "users",
    element: Users,
    withSidebar: true,
  },
];
