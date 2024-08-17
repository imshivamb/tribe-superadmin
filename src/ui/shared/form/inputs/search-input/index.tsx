import { OutlinedInput } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchIcon from "~/assets/icons/search-icon.svg?react";
import { useDebounce } from "~/hooks/useDebounce";
import { styles as inputStyles } from "~/ui/shared/form/inputs/styles";

import { styles } from "./styles";
import { TSearchInput } from "./types";

export const SearchInput = ({ placeholder }: TSearchInput) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const paramName = "search";

  const [value, setValue] = useState(searchParams.get(paramName) || "");

  const searchValue = useDebounce(value, 1000);

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue) {
      searchParams.set(paramName, searchValue);
    } else {
      searchParams.delete(paramName);
    }
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  }, [searchValue]);

  return (
    <OutlinedInput
      startAdornment={<SearchIcon />}
      sx={{
        ...inputStyles.outlinedInput,
        ...styles.input,
      }}
      placeholder={placeholder}
      onChange={handleSearchValueChange}
      value={value}
    />
  );
};
