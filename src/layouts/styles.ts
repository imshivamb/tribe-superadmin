import { GRAY_400, WHITE } from "~/utils/colors";

export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "50px",
    padding: "50px",
    height: "100%",
    "& svg": {
      minHeight: "24px",
    },
  },
  contentContainer: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    padding: "24px",
  },
  content: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    background: WHITE,
    border: `1px solid ${GRAY_400}`,
    borderRadius: "16px",
    display: "flex",
  },
  withoutSidebarContent: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    background: WHITE,
    borderRadius: "16px",
    display: "flex",
  },
};
