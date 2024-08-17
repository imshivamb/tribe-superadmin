import { TPlan } from "~/redux/api/plans";
import { TGetUserSubscription } from "~/redux/api/subscriptions";

export type TUserEditFormProps = {
  userSubscriptions: TGetUserSubscription[] | undefined;
  userDetails: { name: string; email: string; createdAt: string };
  plans: TPlan[] | null;
  subscriptionLoadings: {
    editLoading: boolean;
    getFetching: boolean;
    getLoading: boolean;
  };
  editSubLoading: boolean;
  onSubscriptionChange: (subscriptionId: number, isActive: boolean) => void;
  onCancel: () => void;
  onSave: (id: number | string) => void;
};
