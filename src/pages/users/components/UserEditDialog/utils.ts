import { TPlan } from "~/redux/api/plans";
import { TPurchase, TUser } from "~/redux/api/users";

import { dateTimeFormatter } from "../../utils";

export const getSelectedUserInfo = (selectedUser: TUser) => {
  const name = selectedUser.name;
  const email = selectedUser.email;
  const createdAt = selectedUser.createdAt
    ? dateTimeFormatter(selectedUser.createdAt)
    : "";
  const userId = selectedUser?.id;

  return { name, email, createdAt, userId };
};

export const getFilteredUserPlans = (
  plans: TPlan[] | [],
  userPlans: TPurchase[] | [],
) => {
  console.log(plans, userPlans);
  if (!userPlans.length) return plans;

  if (!plans.length) return [];

  return plans.filter((plan: TPlan) => {
    const planId = plan?.id;

    return userPlans.some(
      (user: TPurchase) => user?.billingPlan?.id !== planId,
    );
  });
};
