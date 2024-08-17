import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TUser, useGetUsersQuery } from "~/redux/api/users";
import { Container } from "~/ui/shared/container";
import CustomProgress from "~/ui/shared/custom-progress";
import { rowsPerPageOptions } from "~/ui/shared/custom-table/components/CustomTablePagination";
import ErrorComponent from "~/ui/shared/error-component";
import { SearchInput } from "~/ui/shared/form/inputs/search-input";

import { UserEditDialog } from "./components/UserEditDialog";
import { UserTable } from "./components/UserTable";
import { styles } from "./styles";
import { getQueryParams } from "./utils";

const Users: React.FC = () => {
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page");
  const limit = searchParams.get("limit") || `${rowsPerPageOptions[0].value}`;
  const search = searchParams.get("search");

  const queryParams = getQueryParams(page, limit, search);

  const { data, isLoading, isFetching, isError } =
    useGetUsersQuery(queryParams);

  const [selectedUser, setSelectedUser] = useState<TUser | null>(null);

  let isLoadingOrError;

  if (isLoading || isFetching) {
    isLoadingOrError = <CustomProgress />;
  }

  if (isError) {
    isLoadingOrError = <ErrorComponent />;
  }

  return (
    <>
      <Container additionalSx={styles.container}>
        {isLoadingOrError ? (
          isLoadingOrError
        ) : (
          <>
            <SearchInput />
            <UserTable
              data={data!.data.items}
              meta={data!.data.meta}
              setSelectedUser={setSelectedUser}
            />
          </>
        )}
      </Container>
      {selectedUser && (
        <UserEditDialog
          selectedUser={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </>
  );
};

export default Users;
