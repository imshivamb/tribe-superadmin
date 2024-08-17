import { Box, Button, Card, Typography } from "@mui/material";

import CustomLink from "../custom-link";
import { styles } from "./styles";

type Props = {
  title: string;
  subtitle?: string;
  subtitleLink?: {
    name: string;
    path: string;
  };
  subtitleButton?: {
    label: string;
    handleClick: () => void;
  };
  children: React.ReactNode;
};

const CustomCard: React.FC<Props> = ({
  title,
  subtitle,
  subtitleLink,
  subtitleButton,
  children,
}) => {
  return (
    <Card sx={styles.card}>
      <Box sx={styles.cardHeader}>
        <Typography sx={styles.cardTitle} className={!subtitle ? "mb" : ""}>
          {title}
        </Typography>
        {subtitle && (
          <Box sx={styles.cardSubtitleWrapper}>
            <Typography sx={styles.cardSubtitle}>{subtitle}</Typography>
            {subtitleLink && (
              <CustomLink to={subtitleLink.path} label={subtitleLink.name} />
            )}
            {subtitleButton && (
              <Button
                disableRipple
                onClick={subtitleButton.handleClick}
                sx={styles.linkBtn}
              >
                {subtitleButton.label}
              </Button>
            )}
          </Box>
        )}
      </Box>
      <Box sx={styles.cardContent}>{children}</Box>
    </Card>
  );
};

export default CustomCard;
