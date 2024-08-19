"use client";
import React, { useEffect, useState } from "react";
import { Box, BoxProps } from "@mui/material";
import { JobResults } from "../helpers/types/job";
import Jobs from "../helpers/jobs";
import JobsList from "../components/Lists/JobsList";
import { useSearchParams } from "react-router-dom";

export interface HomeProps extends BoxProps {}

const Home: React.FC<HomeProps> = ({ ...props }) => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<JobResults | null>(null);

  useEffect(() => {
    const client = new Jobs();
    client
      .getAllJobs({ limit: 12, page: Number(searchParams.get("page") || "1") -1 })
      .then((res) => setData(res.results));
  }, [searchParams]);

  return <Box>{data && <JobsList jobs={data.jobs} pages={data.pages} />}</Box>;
};

export default Home;
