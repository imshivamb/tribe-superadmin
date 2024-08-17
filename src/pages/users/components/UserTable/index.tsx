import { Box, TableCell, TableRow } from "@mui/material";
import { TUser } from "~/redux/api/users";
import CustomTable from "~/ui/shared/custom-table";
import CustomTablePagination from "~/ui/shared/custom-table/components/CustomTablePagination";
import { styles as tableStyles } from "~/ui/shared/custom-table/styles";
import ErrorComponent from "~/ui/shared/error-component";

import { dateTimeFormatter } from "../../utils";
import { UserActionPopover } from "../UserActionPopover";
import { TProps } from "./types";
import { columns, findLatestActive, getStatus } from "./utils";

export const UserTable = ({ data, meta, setSelectedUser }: TProps) => {
  if (!data.length) {
    return <ErrorComponent info="No Data Found" />;
  }

  return (
    <Box>
      <CustomTable columns={columns}>
        {data?.map((user: TUser) => {
          console.log(user?.UserSubscriptions);
          const { name, status } = findLatestActive(user?.UserSubscriptions);

          return (
            <TableRow key={user.id} sx={tableStyles.tableRow}>
              <TableCell>{user?.name}</TableCell>
              <TableCell>{user?.email}</TableCell>
              <TableCell>{dateTimeFormatter(user?.createdAt)}</TableCell>
              <TableCell>{name ? name : "-"}</TableCell>
              <TableCell sx={{ textTransform: "capitalize" }}>
                {status ? getStatus(status) : "-"}
              </TableCell>
              <TableCell
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <UserActionPopover onEdit={() => setSelectedUser(user)} />
              </TableCell>
            </TableRow>
          );
        })}
      </CustomTable>
      {meta && (
        <CustomTablePagination
          totalCount={meta.totalItems}
          totalPages={meta.totalPages}
        />
      )}
    </Box>
  );
};
