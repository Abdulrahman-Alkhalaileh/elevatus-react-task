import React from "react";
import { JobType } from "../../helpers/types/job";
import { Box, BoxProps } from "@mui/material";
import Card from "../Custom/Card";
import CardSkelaton from "../Loading/CardSkelaton";

export interface JobsListProps extends BoxProps {
  jobs?: JobType[];
}

const JobsList: React.FC<JobsListProps> = ({ jobs, ...props }) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={5}
      {...props}
    >
      {jobs
        ? jobs.map((job) => <Card key={job.uuid} job={job} />)
        : [...Array(12)].map(() => <CardSkelaton key={crypto.randomUUID()} />)}
    </Box>
  );
};

export default JobsList;
