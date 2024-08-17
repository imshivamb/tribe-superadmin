import { ORANGE, ORANGE_BACKGROUND } from "~/utils/colors";
import { TYPO_3 } from "~/utils/typos";

export const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    padding: "11px",
    borderRadius: "12px",
    border: `1px solid ${ORANGE}`,
    background: ORANGE_BACKGROUND,
  },
  divider: {
    borderColor: ORANGE,
    margin: "0 8px",
  },
  rightContent: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  typo: {
    ...TYPO_3,
  },
  btn: {
    ...TYPO_3,
    color: ORANGE,
    textTransform: "capitalize",
    padding: 0,
    width: "fit-content",
    "&:hover": {
      background: "transparent",
    },
  },
};
