import { Box, Link, List, ListItem } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ArrowIcon from "~/assets/icons/keyboard-arrow-right-icon.svg?react";

import { links } from "./constants";
import { styles } from "./styles";

export const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Box sx={styles.container}>
      <List sx={styles.list}>
        {links.map((link) => (
          <ListItem key={link.to} sx={styles.listItem}>
            <Link
              component={RouterLink}
              to={link.to}
              sx={styles.link}
              className={pathname.includes(link.navTo) ? "is-active" : ""}
            >
              {pathname.includes(link.navTo) ? (
                <link.activeIcon />
              ) : (
                <link.icon />
              )}
              {link.label}
              <ArrowIcon className="arrow-icon" />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
