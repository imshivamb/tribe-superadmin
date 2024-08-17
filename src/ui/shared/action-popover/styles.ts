import { TYPO_2 } from "~/utils/typos";

export const styles = {
  popover: {
    "& .MuiPopover-paper": {
      marginTop: "8px",
      padding: "4px 0",
      borderRadius: "12px !important",
    },
    "& .MuiButtonBase-root": {
      ...TYPO_2,
      textTransform: "capitalize",
      display: "block",
      padding: "14px 16px",
      minWidth: "174px",
      textAlign: "left",
    },
  },
  iconBtn: {
    padding: 0,
    "&.with-border": {
      border: "1px solid #EDEFF7",
      borderRadius: "8px",
      width: "36px",
      height: "36px",
    },
    "&:hover": {
      background: "#fff",
    },
  },
  actionBtn: {
    display: "flex !important",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "8px",
    padding: "14px 16px",
    ...TYPO_2,
    textTransform: "capitalize",
    textDecoration: "none",
    "& .MuiButton-startIcon": {
      margin: 0,
    },
    "&:hover": {
      backgroundColor: "rgba(25, 118, 210, 0.04)",
    },
  },
};
