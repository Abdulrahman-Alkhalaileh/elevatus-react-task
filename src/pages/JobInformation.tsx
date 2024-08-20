import React from "react";
import { Typography } from "@mui/material";

export interface JobInformationProps {}

const JobInformation: React.FC<JobInformationProps> = ({ ...props }) => {
  return (
    <>
      <Typography variant="h1" color='text.primary'>Job Information</Typography>
    </>
  );
};

export default JobInformation;
