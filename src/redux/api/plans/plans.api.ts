import { enqueueSnackbar } from "notistack";
import { handleIsAuth } from "~/redux/slices/auth.slice";

import { api } from "..";
import {
  TEditPlanBody,
  TEditPlanStatusBody,
  TGetPlanResponse,
} from "./plans.types";

const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPlans: build.query<TGetPlanResponse, void>({
      query: () => ({
        url: "plans/all",
        method: "GET",
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
        } catch (e) {
          enqueueSnackbar({
            variant: "error",
            message:
              "An issue occurred with your request, resulting in a logout. Please try again or contact support if the problem persists.",
            autoHideDuration: 3000,
          });
          localStorage.clear();
          dispatch(handleIsAuth(false));
        }
      },
    }),
    editPlan: build.mutation<void, TEditPlanBody>({
      query: ({ productId, userId }) => ({
        url: `users/${userId}/billing-plan`,
        method: "PATCH",
        body: { productId },
      }),
      invalidatesTags: (_, err, args) => {
        return !err ? [{ type: "Users", id: args.userId }] : [];
      },
    }),
    editPlanStatus: build.mutation<void, TEditPlanStatusBody>({
      query: ({ productId, status, userId }) => ({
        url: `users/${userId}/billing-plan/change-status`,
        method: "PATCH",
        body: { productId, status },
      }),
      invalidatesTags: (_, err, args) => {
        return !err ? [{ type: "Users", id: args.userId }] : [];
      },
    }),
  }),
});

export const {
  useGetPlansQuery,
  useEditPlanMutation,
  useEditPlanStatusMutation,
} = usersApi;
