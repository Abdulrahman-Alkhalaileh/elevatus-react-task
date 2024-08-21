import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Paper, PaperProps } from "@mui/material";

export interface CardSkelatonProps extends PaperProps{}

const CardSkelaton: React.FC<CardSkelatonProps> = ({...props}) => {
  return (
    <Paper elevation={5} {...props}>
    <Stack spacing={1} p={2}>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={270} height={60} />
      <Skeleton variant="rounded" width={270} height={60} />
    </Stack>
    </Paper>
  );
};

export default CardSkelaton;
