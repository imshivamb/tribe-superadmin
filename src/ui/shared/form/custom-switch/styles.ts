import { TYPO_3 } from "~/utils/typos";

export const styles = {
  container: {
    backgroundColor: "white",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "8px 14px",
    border: "1px solid #EDEFF7",
    borderRadius: "15px",
    minHeight: "48px",
  },
  label: {
    ...TYPO_3,
  },
};
