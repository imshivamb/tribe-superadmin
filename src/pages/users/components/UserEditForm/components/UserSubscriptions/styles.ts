import { ERROR_MAIN } from "~/utils/colors";
import { TYPO_3 } from "~/utils/typos";

export const styles = {
  container: {
    position: "relative",
    width: "100%",
  },
  label: {
    ...TYPO_3,
    marginBottom: "8px",
    "&.error": {
      color: ERROR_MAIN,
    },
  },
  loadingContainer: {
    position: "relative",
    opacity: "0.3",
    userSelect: "none",
    pointerEvents: "none",
  },
  loading: {
    position: "absolute",
    zIndex: "5",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  subscriptions: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
};
