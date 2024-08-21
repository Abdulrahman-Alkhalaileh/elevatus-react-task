import React, { useEffect, useState } from "react";
import { CircularProgress, Divider, Grid } from "@mui/material";
import { JobResults, JobType } from "../helpers/types/job";
import { useParams, useSearchParams } from "react-router-dom";
import Jobs from "../helpers/jobs";
import { titleIdSplit } from "../utils/titleIdSplit";
import JobsList from "../components/Lists/JobsList";
import CustomPagination from "../components/Custom/CustomPagination";
import JobInfoCard from "../components/Custom/JobInfoCard";

export interface JobInformationProps {}

const JobInformation: React.FC<JobInformationProps> = ({ ...props }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const { slug } = useParams();
  const [jobData, setJobData] = useState<JobType | undefined>(undefined);
  const [jobs, setJobs] = useState<JobResults | null>(null);

  useEffect(() => {
    if (slug) {
      const search = titleIdSplit(slug);
      if (search) {
        const client = new Jobs();
        client
          .getAllJobs({ itemQuery: search[0] })
          .then((res) =>
            setJobData(
              res.results.jobs.find((job) => job.uuid.includes(search[1]))
            )
          );
      }
    }
  }, [slug]);

  useEffect(() => {
    const client = new Jobs();
    client
      .getAllJobs({
        limit: 8,
        page: Number(searchParams.get("page") || "1") - 1,
        itemQuery: searchParams.get("title") || "",
      })
      .then((res) => setJobs(res.results));
  }, [searchParams]);

  return (
    <Grid
      container
      columnSpacing={1}
      rowGap={4}
      flexDirection="row-reverse"
      position="relative"
    >
      {jobData ? (
        <Grid item xs={12} xl={9}>
          <JobInfoCard jobData={jobData} />
        </Grid>
      ) : (
        <Grid item xs={12} xl={9} display='flex' alignItems='center' justifyContent='center'>
          <CircularProgress size={120} />
        </Grid>
      )}
      <Grid item xs={12} xl={3} position="sticky" top={-100}>
        <JobsList
          maxHeight={700}
          maxWidth={{ xs: "fit-content", xl: 400 }}
          jobs={jobs?.jobs}
          sx={{ overflowY: "auto", overflowX: "hidden" }}
        />
        <Divider />
        <CustomPagination pages={jobs?.pages} size="small" sx={{ pt: 2 }} />
      </Grid>
    </Grid>
  );
};

export default JobInformation;
