import { WHITE, PRIMARY } from "~/utils/colors";
import { TYPO_3 } from "~/utils/typos";

export const styles = {
  button: {
    ...TYPO_3,
    color: WHITE,
    background: PRIMARY,
    textTransform: "unset",
    padding: "13px",
    borderRadius: "12px",
    border: `1px solid ${PRIMARY}`,
    width: "fit-content",
    maxHeight: "48px",
    "&.Mui-disabled, &:hover": {
      background: PRIMARY,
      color: WHITE,
      opacity: 0.8,
    },
    "&.outlined": {
      color: PRIMARY,
      background: WHITE,
    },
    "&.fullWidth": {
      width: "100%",
    },
    "&.selected": {
      background: PRIMARY,
      color: WHITE,
      "& .MuiButton-startIcon path, .MuiButton-endIcon path": {
        fill: WHITE,
      },
    },
  },
  progressWrapper: {
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px",
  },
  progress: {
    color: WHITE,
  },
};
