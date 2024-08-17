import { TYPO_3, TYPO_2 } from "~/utils/typos";
import {
  GRAY_500,
  GRAY_600,
  ERROR_MAIN,
  TEXT_MAIN,
  PRIMARY,
  WHITE,
} from "~/utils/colors";

export const styles = {
  container: {
    width: '100%',
    display: "flex",
    flexDirection: "column",
  },
  formControl: {
    margin: 0,
    gap: "8px",
    alignItems: "flex-start",
    ...TYPO_3,
    "&.is-error .MuiTypography-root": {
      color: ERROR_MAIN,
    },
    "& .MuiTypography-root": {
      ...TYPO_3,
    },
  },
  outlinedInput: {
    borderRadius: "12px",
    ...TYPO_3,
    background: WHITE,
    "& .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${GRAY_500}`,
    },
    "&.Mui-focused, &.Mui-error, &:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${GRAY_600}`,
      },
    },
    "& input": {
      height: "48px",
      padding: "14px 16px",
      boxSizing: "border-box",
      "&::placeholder": {
        color: GRAY_600,
      },
    },
    "&.centered input": {
      textAlign: "center",
    },
    "&.number-input": {
      paddingRight: "10px",
      borderRadius: "8px",
      "& input": {
        padding: "3px 7px",
        height: "32px",
        "&[type=number]::-webkit-outer-spin-button, &[type=number]::-webkit-inner-spin-button":
          {
            WebkitAppearance: "none !important",
          },
      },
    },

    "&.MuiInputBase-multiline": {
      padding: "16px 2px",
      "& textarea": {
        padding: "0 14px",
        "&::-webkit-scrollbar": {
          width: "2px",
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
  },
  errorMessage: {
    ...TYPO_2,
    color: ERROR_MAIN,
    marginTop: "8px",
  },
  label: {
    ...TYPO_2,
    marginBottom: "8px",
  },
  inputAdornment: {
    marginRight: "-4px",
    "& .MuiButtonBase-root": {
      padding: "4px",
      position: "relative",
      "&:hover": {
        background: "transparent",
      },
      "&.visible::after": {
        content: '""',
        position: "absolute",
        transform: "rotate(45deg)",
        width: "100%",
        height: "1px",
        background: TEXT_MAIN,
      },
    },
  },
  inputBtn: {
    ...TYPO_3,
    fontWeight: 400,
    textTransform: "capitalize",
    textDecoration: "underline",
    color: PRIMARY,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  customSpinners: {
    display: "flex",
    flexDirection: "column",
    height: "unset",
    margin: 0,
    "& .MuiIconButton-root": {
      padding: 0,
      "& svg": {
        width: "10px",
        height: "10px",
      },
      "&:hover": {
        background: "transparent",
      },
      "&.outer": {
        transform: "rotate(180deg)",
      },
    },
  },
};
