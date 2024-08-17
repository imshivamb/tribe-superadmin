import { GRAY_400, GRAY_600, TEXT_MAIN, WHITE } from "~/utils/colors";
import { TYPO_3 } from "~/utils/typos";

const item = {
  padding: "14px 16px",
  borderRight: `1px solid ${GRAY_400}`,
  borderRadius: 0,
};

export const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    background: WHITE,
    border: `1px solid ${GRAY_400}`,
    borderRadius: "8px",
    marginTop: "8px",
    overflowX: "auto",
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
  typo: {
    ...item,
    ...TYPO_3,
    whiteSpace: "nowrap",
    "&.fullwidth": {
      width: "100%",
    },
  },
  select: {
    width: "auto",
    ...item,
    "& .MuiOutlinedInput-input": {
      padding: 0,
      paddingRight: "10px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0 !important",
    },
    "& .MuiSelect-icon": {
      right: "14px",
      top: "50%",
      transform: "translateY(-50%)",
    },
    "&::focus-visible": {
      outline: "1px solid #000",
    },
  },
  menu: {
    maxHeight: "220px",
    borderRadius: "6px",
    "&::-webkit-scrollbar": {
      width: "3px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      background: GRAY_600,
      borderRadius: "5px",
      width: "2px",
    },
    "& .MuiList-root": {
      padding: "4px 0",
    },
  },
  menuItem: {
    padding: "4px",
    justifyContent: "center",
    borderRadius: "2px",
    marginBottom: "2px",
    "&:focus-visible": {
      outline: "1px solid #000",
    },
  },
  iconBtn: {
    ...item,
    "&:last-of-type": {
      border: 0,
    },
    "&:hover": {
      background: "transparent",
      "& path": {
        stroke: TEXT_MAIN,
      },
    },
    "&:focus-visible": {
      outline: "1px solid #000",
    },
  },
  emptyListRow: {
    height: "100%",
  },
  colFlexContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "wrap",
    maxWidth: "380px",
    margin: "0 auto",
  },
  emptyText: {
    ...TYPO_3,
    textAlign: "center",
    margin: "20px",
  },
};
