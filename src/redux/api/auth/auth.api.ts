import { api } from "..";
import { TSignInBody, TSignInResponse } from "./auth.types";
import { UserService } from "./auth.utils";

const AUTH = "auth";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation<TSignInResponse, TSignInBody>({
      query: (body) => ({
        url: `${AUTH}`,
        method: "POST",
        body,
      }),
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          UserService.setUser(data);
        } catch (e) {
          UserService.removeUser();
        }
      },
    }),
  }),
});

export const { useSignInMutation } = authApi;
