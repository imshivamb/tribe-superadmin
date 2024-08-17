import { GRAY_600, GRAY_800, PRIMARY_BACKGROUND } from "~/utils/colors";
import { TYPO_3 } from "~/utils/typos";

export const styles = {
  icon: {
    display: "flex",
    alignItems: "center",
    width: "20px",
    transition: "transform 0.2s linear",
  },
  iconClosed: {
    transform: "rotate(270deg)",
  },
  iconOpened: {
    transform: "rotate(90deg)",
  },
  btn: {
    ...TYPO_3,
    display: "flex",
    alignItems: "center",
    gap: "5px",
    padding: "5px",
    minWidth: "unset",
    color: GRAY_800,
    borderRadius: "8px",
    "&:focus-visible": {
      outline: "1px solid #000",
    },
  },
  popover: {
    minWidth: "260px",
    padding: "4px 0",
  },
  avatar: {
    borderRadius: "8px",
    width: "36px",
    height: "36px",
    background: GRAY_600,
  },
  list: {
    padding: "8px 0",
  },
  listItem: {
    display: "block",
    width: "100%",
    padding: 0,
    overflow: "hidden",
    margin: "2px 0",
    "&:hover": {
      background: PRIMARY_BACKGROUND,
    },
    "&:focus-visible": {
      outline: "1px solid #000",
    },
  },
  link: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "8px",
    ...TYPO_3,
    textDecoration: "none",
    textTransform: "none",
    padding: "14px 16px",
    "& svg": {
      width: "20px",
    },
    "&:focus-visible": {
      outline: "1px solid #000",
    },
  },
};
