import React, { useEffect, useState } from "react";
import { BoxProps, Stack } from "@mui/material";
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
    // we are handling the page limit and itemQuery by searchParams
    client
      .getAllJobs({
        limit: 12,
        page: Number(searchParams.get("page") || "1") - 1, // -1 to make sure that it matches MUI patination because it starts at 1 not 0
        itemQuery: searchParams.get("title") || "",
      })
      .then((res) => setData(res.results));
  }, [searchParams]);

  return (
    <Stack
      spacing={4}
      alignItems="center"
      justifyContent="space-between"
      pb={4}
    >
      <Filter />
      <JobsList jobs={data?.jobs} />
      <CustomPagination pages={data?.pages || 1} />
    </Stack>
  );
};

export default Home;
