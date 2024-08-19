"use client";
import React from "react";
import { JobType } from "../../helpers/types/job";
import { Box, Stack, StackProps } from "@mui/material";
import Card from "../Custom/Card";
import CustomPagination from "../Custom/CustomPagination";

export interface JobsListProps extends StackProps {
  jobs: JobType[];
  pages: number;
}

const JobsList: React.FC<JobsListProps> = ({ jobs, pages, ...props }) => {
  return (
    <Stack spacing={3} {...props}>
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={5}>
        {jobs.map((job) => (
          <Card key={job.uuid} job={job} />
        ))}
      </Box>
      <CustomPagination pages={pages} />
    </Stack>
  );
};

export default JobsList;
