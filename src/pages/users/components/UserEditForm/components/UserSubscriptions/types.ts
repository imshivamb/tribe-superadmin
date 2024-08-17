import { TGetUserSubscription } from "~/redux/api/subscriptions";

export type TUserSubscriptions = {
  subscriptions: TGetUserSubscription[];
  subscriptionLoadings: {
    editLoading: boolean;
    getFetching: boolean;
    getLoading: boolean;
  };
  onChange: (subscriptionId: number, isActive: boolean) => void;
};
