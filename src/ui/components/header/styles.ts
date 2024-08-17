import { GRAY_400, PRIMARY } from "~/utils/colors";
import { TYPO_3 } from "~/utils/typos";

export const styles = {
  header: {
    background: "#fff",
    borderBottom: `1px solid ${GRAY_400}`,
    padding: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
  },
  headerLogo: {
    width: '200px',
  },
  navLink: {
    ...TYPO_3,
    textDecoration: "none",
    "&.is-active": {
      color: PRIMARY,
    },
  },
};
