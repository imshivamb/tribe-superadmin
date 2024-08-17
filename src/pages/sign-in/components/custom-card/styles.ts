import { GRAY_400, PRIMARY } from "~/utils/colors";
import { TYPO_8, TYPO_4 } from "~/utils/typos";

export const styles = {
  card: {
    maxWidth: "620px",
    width: "100%",
    padding: "40px 0",
    border: `1px solid ${GRAY_400}`,
    borderRadius: "12px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.06)",
    maxHeight: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  cardHeader: {
    padding: "0 40px",
  },
  cardTitle: {
    ...TYPO_8,
    "&.mb": {
      marginBottom: "20px",
    },
  },
  cardSubtitleWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "12px",
    marginBottom: "20px",
  },
  cardSubtitle: {
    ...TYPO_4,
  },
  cardContent: {
    padding: "0 40px",
    boxSizing: "border-box",
    maxHeight: "100%",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#fff",
    },
    "&::-webkit-scrollbar-thumb": {
      background: GRAY_400,
      borderRadius: "5px",
      width: "2px",
    },

    "& .gap-l": {
      gap: "20px",
      marginTop: "20px",
    },
  },
  linkBtn: {
    ...TYPO_4,
    color: PRIMARY,
    padding: 0,
    textTransform: "unset",
    "&:hover": {
      background: "transparent",
    },
    "&:focus-visible": {
      outline: "2px solid #000",
    },
  },
};
