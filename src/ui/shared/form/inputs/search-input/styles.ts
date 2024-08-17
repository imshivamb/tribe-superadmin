import { GRAY_600 } from "~/utils/colors";

export const styles = {
  input: {
    background: "#fff",
    maxWidth: "375px",
    width: "100%",
    marginRight: "20px",
    "& path": {
      stroke: GRAY_600,
    },
    "& input": {
      height: "38px",
      padding: "9px 16px",
      boxSizing: "border-box",
      "&::placeholder": {
        color: GRAY_600,
      },
    },
  },
  actionsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
  },
};
