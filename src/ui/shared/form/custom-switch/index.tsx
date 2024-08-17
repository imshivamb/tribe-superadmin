import { Grid, Switch, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SwitchTickIcon from "~/assets/icons/switch-tick-icon.svg?react";

import { styles } from "./styles";

const pxToRem = (px: any, oneRemPx = 16) => `${px / oneRemPx}rem`;

const IOSSwitch = styled(({ isSmall, withTick, ...props }: any) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme, isSmall, withTick }) => {
  const borderWidth = 2;
  const pxHeight = isSmall ? 18 : 24;
  const pxWidth = isSmall ? 32 : 38;
  const pxSize = isSmall ? 10 : 16;

  const width = pxToRem(pxWidth);
  const height = pxToRem(pxHeight);
  const size = pxToRem(pxSize);
  const gap = (pxHeight - pxSize) / 2;

  return {
    width,
    height,
    padding: 0,
    overflow: "unset",
    "& .MuiSwitch-switchBase": {
      padding: "4px !important",
      "&.Mui-checked": {
        color: "#fff",
        transform: `translateX(calc(${width} - ${size} - ${pxToRem(2 * gap)}))`,
        "& + .MuiSwitch-track": {
          backgroundColor: "#4D6EF5",
          opacity: 1,
          border: "none",
        },
        "& .MuiSwitch-thumb": {
          position: "relative",
          backgroundColor: "#fff",
          boxShadow: "0px 3px 1px 0px #0000000F, 0px 3px 8px 0px #00000026",

          "&::before": {
            content: '""',
            width: "9px",
            height: "7px",
            background: `url(${SwitchTickIcon}) no-repeat center center`,
            backgroundSize: "contain",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            visibility: withTick ? "visible" : "hidden",
          },
        },
      },

      "&.Mui-disabled .MuiSwitch-thumb": {
        backgroundColor: "#f5f5f5",
      },
    },
    "& .MuiSwitch-track": {
      borderRadius: 40,
      border: `solid 2px #8C8F9D`,
      borderWidth,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(["background-color"]),
      boxSizing: "border-box",
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      backgroundColor: "#8C8F9D",
      width: size,
      height: size,
    },
    "&.Mui-checked": {},
  };
});

export const CustomSwitch = ({ label, ...rest }: any) => {
  return (
    <Grid sx={styles.container}>
      {label && <Typography sx={styles.label}>{label}</Typography>}
      <IOSSwitch {...rest} />
    </Grid>
  );
};
