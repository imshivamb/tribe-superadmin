import { Box, IconButton, Typography } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import LeftArrowIcon from "~/assets/icons/arrows/left-arrow-icon-l.svg?react";
import RightArrowIcon from "~/assets/icons/arrows/right-arrow-icon-l.svg?react";

import CustomSelect from "./CustomSelect";
import { styles } from "./styles";

export const rowsPerPageOptions = [
  { label: 50, value: 50 },
  { label: 100, value: 100 },
  { label: 200, value: 200, isLocked: true },
];

type TProps = {
  totalCount: number;
  totalPages: number;
};

const CustomTablePagination: React.FC<TProps> = ({
  totalCount,
  totalPages,
}) => {
  const pageOptions = useMemo(
    () =>
      Array.from({ length: totalPages }).map((_, i) => ({
        label: i + 1,
        value: i + 1,
      })),
    [totalPages],
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const limit = searchParams.get("limit") || `${rowsPerPageOptions[0].value}`;
  const page = searchParams.get("page") || "1";

  useEffect(() => {
    if (!limit) {
      searchParams.set("limit", limit);
    }
    if (!page) {
      searchParams.set("page", page);
    }
    setSearchParams(searchParams);
  }, [limit, page]);

  const handleLimitChange = (newLimit: number | string) => {
    searchParams.set("limit", `${newLimit}`);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  const handlePageChange = (page: number | string) => {
    searchParams.set("page", `${page}`);
    setSearchParams(searchParams);
  };

  const getItemsIndexes = () => {
    if (limit && page) {
      const nPage = +page;
      const nLimit = +limit;
      const first = (nPage - 1) * nLimit + 1;
      const last = nPage === totalPages ? totalCount : nPage * nLimit;
      return first === last ? `${first}` : `${first}-${last}`;
    }
    return "";
  };

  getItemsIndexes();

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.typo}>Items per page:</Typography>
      <CustomSelect
        value={limit || rowsPerPageOptions[0].value}
        options={rowsPerPageOptions}
        onChange={handleLimitChange}
        selectSx={styles.select}
        menuSx={{ width: "110px" }}
      />
      <Typography sx={styles.typo} className="fullwidth">
        {getItemsIndexes()} of {totalCount}
      </Typography>
      <CustomSelect
        value={page}
        options={pageOptions}
        onChange={handlePageChange}
        selectSx={styles.select}
        menuSx={styles.menu}
        menuItemSx={styles.menuItem}
        disabled={totalPages < 2}
      />
      <Typography sx={styles.typo}> {totalPages} pages</Typography>
      <IconButton
        sx={styles.iconBtn}
        onClick={() => handlePageChange(+page - 1)}
        disabled={+page === 1}
        disableRipple
      >
        <LeftArrowIcon />
      </IconButton>
      <IconButton
        sx={styles.iconBtn}
        onClick={() => handlePageChange(+page + 1)}
        disabled={!(+page < totalPages)}
        disableRipple
      >
        <RightArrowIcon />
      </IconButton>
    </Box>
  );
};

export default CustomTablePagination;
