import { api } from "..";
import { providesList } from "../utils";
import { TGetUsersParams, TGetUsersResponse } from "./users.types";

const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<TGetUsersResponse, TGetUsersParams>({
      query: ({ ...params }) => {
        return {
          url: "users",
          method: "GET",
          params,
        };
      },
      providesTags: (result, err) => {
        return err ? [] : providesList(result?.data?.items, "Users");
      },
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
