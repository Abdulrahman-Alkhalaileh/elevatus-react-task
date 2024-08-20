import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import StyledTextField from "./Styled/StyledTextField";

export interface FilterProps {}

const Filter: React.FC<FilterProps> = ({ ...props }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");

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
          placeholder="Search By Job Title..."
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
              else setSearchParams({ page: "1" });
            }}
          >
            Search
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
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Filter;
