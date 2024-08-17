import { Box, Grid } from "@mui/material";
import { useMemo, useState } from "react";
import CustomButton from "~/ui/shared/custom-button";
import CustomSelect from "~/ui/shared/form/custom-select";
import CustomInput from "~/ui/shared/form/inputs/custom-input";

import { UserSubscriptions } from "./components/UserSubscriptions";
import { UserSubscriptionsSkeleton } from "./components/UserSubscriptionsSkeleton";
import { styles } from "./styles";
import { TUserEditFormProps } from "./types";
import { PlansAdapter } from "./utils";

export const UserEditForm = ({
  userSubscriptions,
  userDetails,
  editSubLoading,
  plans,
  subscriptionLoadings,
  onSave,
  onCancel,
  onSubscriptionChange,
}: TUserEditFormProps) => {
  const [selectedPlanId, setSelectedPlanId] = useState<number | string>("");

  const adaptedPlans = useMemo(() => PlansAdapter.modify(plans), [plans]);

  const { name, email, createdAt } = userDetails;

  const isDisabled = subscriptionLoadings.editLoading;

  const handleSave = () => {
    if (isDisabled) return;

    onSave(selectedPlanId);
  };

  const handleCancel = () => {
    if (isDisabled) return;

    onCancel();
  };

  const onPlanChange = (e: any) => {
    setSelectedPlanId(e.target.value);
  };

  const isLoading =
    subscriptionLoadings.editLoading || subscriptionLoadings.getFetching;

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.inputWrapper}>
        <CustomInput
          disabled
          name={`name`}
          label="Name"
          placeholder="Name"
          value={name}
        />
        <CustomInput
          disabled
          name={`email`}
          label="Email"
          placeholder="Email"
          value={email}
        />
      </Box>
      <CustomInput
        disabled
        name={`createdAt`}
        label="Created At"
        placeholder="Created At"
        value={createdAt}
      />
      {subscriptionLoadings.getLoading && <UserSubscriptionsSkeleton />}
      {userSubscriptions && Boolean(userSubscriptions.length) && (
        <UserSubscriptions
          subscriptions={userSubscriptions}
          subscriptionLoadings={subscriptionLoadings}
          onChange={onSubscriptionChange}
        />
      )}

      <CustomSelect
        disabled={!adaptedPlans || isLoading}
        label="Plan"
        placeholder="Plan"
        options={adaptedPlans ? adaptedPlans : []}
        value={selectedPlanId}
        onAdditionalChange={onPlanChange}
      />
      <Grid sx={{ display: "flex", gap: "8px" }}>
        <CustomButton
          disabled={subscriptionLoadings.editLoading || editSubLoading}
          label={"Close"}
          handleClick={handleCancel}
          outlined
        />
        <CustomButton
          isLoading={editSubLoading}
          disabled={subscriptionLoadings.editLoading || editSubLoading}
          label={"Save"}
          handleClick={handleSave}
        />
      </Grid>
    </Box>
  );
};
