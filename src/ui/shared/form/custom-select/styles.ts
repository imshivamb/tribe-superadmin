import {
  ERROR_MAIN,
  GRAY_10,
  GRAY_500,
  GRAY_600,
  PRIMARY_BACKGROUND,
  PRIMARY_BACKGROUND_DARK,
  WHITE,
} from "~/utils/colors";
import { TYPO_3 } from "~/utils/typos";

export const styles = {
  wrapper: {
    width: "100%",
  },
  label: {
    ...TYPO_3,
    marginBottom: "8px",
    "&.error": {
      color: ERROR_MAIN,
    },
  },
  select: {
    width: "100%",
    ...TYPO_3,
    background: WHITE,
    borderRadius: "12px",
    "& .MuiOutlinedInput-input": {
      padding: "14px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${GRAY_500}`,
    },
    "&.Mui-focused, &.Mui-error, &:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${GRAY_600}`,
      },
    },
    "& .MuiListItemIcon-root": {
      display: "none",
    },
    "& .MuiSelect-icon": {
      top: "50%",
      right: "14px",
      transform: "translateY(-50%)",
    },
  },
  menu: {
    borderRadius: "12px",
    border: `1px solid ${GRAY_10}`,
    boxShadow:
      "1px 2px 2px 0px rgba(35, 37, 47, 0.04), 0px 4px 10px 0px rgba(35, 37, 47, 0.10)",
    marginTop: "10px",

    "& .MuiList-root": {
      padding: 0,
    },
    maxHeight: "250px",
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
  },
  menuItem: {
    ...TYPO_3,
    padding: "14px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "&:hover": {
      background: PRIMARY_BACKGROUND,
    },
    "&.Mui-selected, &.Mui-selected:hover": {
      background: PRIMARY_BACKGROUND_DARK,
    },
    "& .MuiListItemIcon-root": {
      minWidth: "20px",
    },
    "&.Mui-disabled": {
      opacity: 0.9,
    },
  },
  placeholderMenuItem: {
    ...TYPO_3,
    padding: "14px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    opacity: 0.5,
  },
};
