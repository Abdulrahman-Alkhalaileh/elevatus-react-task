import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import StyledTextField from "./Styled/StyledTextField";
import { useTranslation } from "react-i18next";

export interface FilterProps {}

// The Idea of this component that there is a controlled textField which store the data in useState.
// once the search button clicked, the onclick function will set the value of that state into the search param.
// if the value was '', the value will never update.
// once the reset button clicked, the search term will be deleted form the searchParams, but the page param will still the same.
const Filter: React.FC<FilterProps> = ({ ...props }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const {t} = useTranslation()

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={{ xs: "column", md: "row" }}
        gap={2}
        p={1}
      >
        <StyledTextField
          placeholder={t("searchPlaceholder")}
          size="small"
          InputProps={{ startAdornment: <SearchIcon color="disabled" /> }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              borderRadius: 3,
              fontWeight: "bold",
              fontSize: { sm: "inherit", md: 17 },
            }}
            onClick={() => {
              if (search !== "") setSearchParams({ title: search, page: "1" });
            }}
          >
            {t('search')}
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 3,
              fontWeight: "bold",
              fontSize: { sm: "inherit", md: 17 },
            }}
            color="error"
            onClick={() => {
              setSearch("");
              const newParams = new URLSearchParams(searchParams);
              newParams.delete("title");
              setSearchParams(newParams);
            }}
          >
            {t('reset')}
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Filter;
