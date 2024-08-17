import {
  TEditSubPlanBody,
  TEditSubscriptionBody,
  TGetSubscriptionBody,
  TGetSubscriptionResponse,
} from ".";
import { api } from "..";

const subscriptionsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUserSubscription: build.query<
      TGetSubscriptionResponse,
      TGetSubscriptionBody
    >({
      query: ({ userId }) => ({
        url: `users/${userId}/subscriptions`,
        method: "GET",
      }),
      providesTags: ["Subscriptions"],
      keepUnusedDataFor: 0,
    }),
    editSubscription: build.mutation<void, TEditSubscriptionBody>({
      query: ({ subscriptionId, isActive, userId }) => ({
        url: `users/${userId}/subscriptions`,
        method: "PATCH",
        body: { subscriptionId, isActive },
      }),
      invalidatesTags: (_, err) => (!err ? ["Subscriptions"] : []),
    }),
    editSubPlan: build.mutation<void, TEditSubPlanBody>({
      query: ({ billingPlanId, userId }) => ({
        url: `users/${userId}/subscriptions`,
        method: "POST",
        body: { billingPlanId },
      }),
      invalidatesTags: (_, err) => (!err ? ["Users"] : []),
    }),
  }),
});

export const {
  useGetUserSubscriptionQuery,
  useEditSubscriptionMutation,
  useEditSubPlanMutation,
} = subscriptionsApi;
