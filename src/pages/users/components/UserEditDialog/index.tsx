import { useSnackbar } from "notistack";
import { useGetPlansQuery } from "~/redux/api/plans";
import {
  useEditSubPlanMutation,
  useEditSubscriptionMutation,
  useGetUserSubscriptionQuery,
} from "~/redux/api/subscriptions";
import CustomDialog from "~/ui/shared/dialogs/wrappers/custom-dialog";

import { UserEditForm } from "../UserEditForm";
import { styles } from "./styles";
import { TUserEditDialog } from "./types";
import { getFilteredUserPlans, getSelectedUserInfo } from "./utils";

export const UserEditDialog = ({ selectedUser, onClose }: TUserEditDialog) => {
  const { enqueueSnackbar } = useSnackbar();

  const { data } = useGetPlansQuery();

  const [editSubPlan, { isLoading: editSubLoading }] = useEditSubPlanMutation();

  const { name, email, createdAt, userId } = getSelectedUserInfo(selectedUser);

  const filteredPlans = getFilteredUserPlans(
    data?.data || [],
    selectedUser?.Purchase || [],
  );

  console.log({ filteredPlans });

  const [editSubscription, { isLoading: editSubscriptionLoading }] =
    useEditSubscriptionMutation();

  const {
    data: userSubscriptions,
    isLoading: isSubscriptionLoading,
    isFetching: isSubscriptionFetching,
  } = useGetUserSubscriptionQuery({ userId });

  const onSubscriptionChange = (subscriptionId: number, isActive: boolean) => {
    editSubscription({ userId, isActive, subscriptionId });
  };

  const handleEditPlan = (id: number | string) => {
    if (id === "") {
      onClose();
      return;
    }

    editSubPlan({ userId: userId, billingPlanId: id as number })
      .unwrap()
      .then(() => {
        enqueueSnackbar({
          message: "You have successfully changed the user plan!",
          variant: "success",
          autoHideDuration: 3000,
        });
        onClose();
      })
      .catch(() => {
        enqueueSnackbar({
          message: "Something went wrong while changing the user plan!",
          variant: "error",
          autoHideDuration: 3000,
        });
      });
  };

  return (
    <CustomDialog
      open={true}
      additionalPaperStyles={styles.additionalPaperStyles}
      canClose={!editSubscriptionLoading || !editSubLoading}
      handleClose={onClose}
    >
      <UserEditForm
        userDetails={{ name, email, createdAt }}
        userSubscriptions={userSubscriptions?.data}
        subscriptionLoadings={{
          editLoading: editSubscriptionLoading,
          getFetching: isSubscriptionFetching,
          getLoading: isSubscriptionLoading,
        }}
        plans={filteredPlans || null}
        editSubLoading={editSubLoading}
        onCancel={onClose}
        onSubscriptionChange={onSubscriptionChange}
        onSave={handleEditPlan}
      />
    </CustomDialog>
  );
};
