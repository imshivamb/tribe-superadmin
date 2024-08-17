import { Box } from "@mui/material";
import { useDocumentTitle } from "~/hooks/useDocumentTitle";
import { Header } from "~/ui/components/header";
import { Sidebar } from "~/ui/components/sidebar";

import { styles } from "./styles";
import { TProps } from "./types";

const DefaultLayout: React.FC<TProps> = ({
  withHeader = true,
  withSidebar = true,
  title,
  element,
}) => {
  useDocumentTitle(`Super Admin | ${title}`);

  return (
    <>
      {withHeader && <Header />}
      <Box sx={styles.contentContainer}>
        <Box sx={withSidebar ? styles.content : styles.withoutSidebarContent}>
          {withSidebar && <Sidebar />}
          {element}
        </Box>
      </Box>
    </>
  );
};

export default DefaultLayout;
