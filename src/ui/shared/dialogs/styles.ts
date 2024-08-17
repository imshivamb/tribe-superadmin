import { GRAY_400, GRAY_600, GRAY_700 } from "~/utils/colors";
import { TYPO_6, TYPO_3 } from "~/utils/typos";

export const styles = {
  paper: {
    maxWidth: "650px",
    width: "100%",
    borderRadius: "12px",
    boxShadow: "none",
    padding: "40px 40px 20px",
    border: `1px solid ${GRAY_400}`,
    overflow: "hidden",
    "&.with-header": {
      padding: "0",
    },
  },
  container: {
    padding: "20px 40px",
    "&:first-of-type": {
      borderBottom: `1px solid ${GRAY_400}`,
      paddingTop: "40px",
    },
    "&.scrollable": {
      maxHeight: "100%",
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        width: "5px",
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
  },
  title: {
    ...TYPO_6,
  },
  typo: {
    ...TYPO_3,
    color: GRAY_700,
    marginTop: "2px",
  },
};
