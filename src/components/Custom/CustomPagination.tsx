"use client";
import React from "react";
import { Box, Pagination, PaginationProps } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export interface CustomPaginationProps extends PaginationProps {
  pages: number;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  pages,
  ...props
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setSearchParams({ page: page.toString() });
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Pagination
        count={pages}
        page={Number(searchParams.get("page") || "0")}
        onChange={handleChange}
        size="large"
        variant="outlined"
        {...props}
      />
    </Box>
  );
};

export default CustomPagination;
