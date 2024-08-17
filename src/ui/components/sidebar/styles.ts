import { GRAY_400, PRIMARY, WHITE, GRAY_600 } from "~/utils/colors";
import { TYPO_3 } from "~/utils/typos";

export const styles = {
  container: {
    maxWidth: "245px",
    width: "100%",
    height: "100%",
    overflowY: "auto",
    padding: "24px",
    borderRight: `1px solid ${GRAY_400}`,
    "&::-webkit-scrollbar": {
      width: "3px",
      height: "3px",
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
  list: {
    margin: 0,
    padding: 0,
  },
  listItem: {
    padding: 0,
    margin: 0,
    marginBottom: "4px",
  },
  link: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    width: "100%",
    padding: "8px",
    borderRadius: "12px",
    ...TYPO_3,
    textDecoration: "none",
    textTransform: "capitalize",
    "& .arrow-icon": {
      marginLeft: "auto",
    },
    "&.is-active": {
      background: PRIMARY,
      color: WHITE,
      "& .arrow-icon path": {
        stroke: WHITE,
      },
    },
  },
};
