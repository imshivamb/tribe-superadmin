import { TUser } from "~/redux/api/users";

export type TUserEditDialog = {
  selectedUser: TUser;
  onClose: () => void;
};

export type TUserEditForm = {
  name: string;
  email: string;
  createdAt: string;
  plan: number | string;
};
