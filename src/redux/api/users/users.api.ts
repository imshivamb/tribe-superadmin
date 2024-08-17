import { api } from "..";
import { providesList } from "../utils";
import { TGetUsersParams, TGetUsersResponse } from "./users.types";
const GHOST_API_URL = import.meta.env.VITE_GHOST_API_URL || 'http://localhost:2368/ghost/api/admin';

const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<TGetUsersResponse, TGetUsersParams>({
      query: ({ ...params }) => {
        return {
          url: `${GHOST_API_URL}/super-admin/users`,
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
