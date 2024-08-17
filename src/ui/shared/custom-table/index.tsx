import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { styles } from "./styles";
import { TColumn } from "./utilities/types";

type Props = {
  columns: TColumn[];
  className?: string;
  children: React.ReactNode;
};

const CustomTable: React.FC<Props> = ({
  columns,
  className = "",
  children,
}) => {
  return (
    <TableContainer
      sx={styles.tableContainer}
      className={`scrollable-elem ${className}`}
    >
      <Table>
        <TableHead>
          <TableRow sx={styles.tableRow} className="head">
            {columns.map((col) => (
              <TableCell
                key={col.label}
                align={col?.aligned || "left"}
                colSpan={col.cellCount || 1}
              >
                <Grid sx={styles.headCellContent}>{col.label}</Grid>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
