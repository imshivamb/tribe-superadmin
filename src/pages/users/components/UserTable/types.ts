import { TUser } from "~/redux/api/users";
import { TMeta } from "~/redux/types";

export type TProps = {
  data: TUser[];
  meta: TMeta;
  setSelectedUser: (user: TUser) => void;
};
