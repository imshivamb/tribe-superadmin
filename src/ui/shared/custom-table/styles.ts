import { GRAY_400, GRAY_600, PRIMARY, WHITE } from "~/utils/colors";
import { TYPO_3 } from "~/utils/typos";

const border = `1px solid ${GRAY_400}`;

export const styles = {
  tableContainer: {
    border: border,
    borderRadius: "12px",
    background: WHITE,
    maxHeight: "100%",
    overflow: "auto",
    "&.fullHeight": {
      height: "100%",
      "& .MuiTable-root, .MuiTableBody-root": {
        height: "100%",
      },
    },
    "&::-webkit-scrollbar": {
      width: "5px",
      height: "5px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      background: GRAY_600,
      borderRadius: "5px",
      width: "2px",
    },
  },
  tableRow: {
    borderBottom: border,
    "& .MuiTableCell-root": {
      borderBottom: 0,
      borderRight: border,
      padding: "12px",
      whiteSpace: "nowrap",
      ...TYPO_3,
      "&:last-of-type": {
        borderRight: 0,
      },
      "&.sm": {
        padding: "10px 12px",
      },
    },
    "& a": {
      ...TYPO_3,
      color: PRIMARY,
      textDecoration: "none",
    },
    "&:last-of-type": {
      borderBottom: 0,
    },
    "&.head": {
      borderBottom: border,
    },
    "& .icon-cell": {
      width: "48px",
    },
  },
  headCellContent: {
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  filterBtn: {
    padding: 0,
    marginLeft: "5px",
    "&:hover": {
      background: "transparent",
    },
    "& .active path": {
      stroke: PRIMARY,
    },
  },
  checkboxWrapper: {
    width: "48px",
    "& .MuiFormControlLabel-root": {
      width: "16px",
      "& svg": {
        width: "16px",
        height: "16px",
      },
    },
  },
};
