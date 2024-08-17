import { Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { styles } from "./styles";

type Props = {
  to: string;
  label: string;
  className?: string;
};

const CustomLink: React.FC<Props> = ({ to, label, className = "" }) => {
  return (
    <Link component={RouterLink} to={to} sx={styles} className={className}>
      {label}
    </Link>
  );
};

export default CustomLink;
