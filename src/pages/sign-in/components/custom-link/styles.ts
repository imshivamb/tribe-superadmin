import { TYPO_4 } from "~/utils/typos";
import { PRIMARY } from "~/utils/colors";

export const styles = {
  ...TYPO_4,
  fontWeight: 600,
  color: PRIMARY,
  textDecoration: "none",
  "&.aligned-right": {
    marginLeft: "auto",
  },
};
