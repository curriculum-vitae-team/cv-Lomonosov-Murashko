import { Search as SearchIcon } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { memo, useState } from "react";
import { StyledTextField } from "./SearchBox.styles";
import { SearchBoxProps } from "./SearchBox.types";

export const SearchBox = memo(({ onQuery, queryValue }: SearchBoxProps) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onQuery(e.target.value);
  };

  return (
    <StyledTextField
      onChange={handleChange}
      value={queryValue}
      autoComplete="off"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    ></StyledTextField>
  );
});
