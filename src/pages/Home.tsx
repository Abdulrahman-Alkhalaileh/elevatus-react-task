"use client";
import React, { useEffect, useState } from "react";
import { BoxProps, Stack, Typography } from "@mui/material";
import { JobResults } from "../helpers/types/job";
import Jobs from "../helpers/jobs";
import JobsList from "../components/Lists/JobsList";
import { useSearchParams } from "react-router-dom";
import Filter from "../components/Filter";
import CustomPagination from "../components/Custom/CustomPagination";

export interface HomeProps extends BoxProps {}

const Home: React.FC<HomeProps> = ({ ...props }) => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<JobResults | null>(null);

  useEffect(() => {
    const client = new Jobs();
    client
      .getAllJobs({
        limit: 12,
        page: Number(searchParams.get("page") || "1") - 1,
        itemQuery: searchParams.get("title") || "",
      })
      .then((res) => setData(res.results));
  }, [searchParams]);

  return (
    <Stack spacing={4} alignItems='center' justifyContent='space-between' minHeight='80vh' pb={4}>
          <Filter />
      {data ? (
          <JobsList jobs={data.jobs} />
        ):(
          <Typography variant='h1' color='text.secondary'>No Jobs Found...</Typography>
        )}
          <CustomPagination pages={data?.pages || 1} />
    </Stack>
  );
};

export default Home;
