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
      // first we will get the title and the id from the pathname
      const search = titleIdSplit(slug);

      if (search) {
        const client = new Jobs();
        // we will search for the title, then we will call setJobData to store the job which it's
        // id matches the selected one.

        // we called this api twice, but for frontend side, it's better to search in array of 3 elements
        // than to search in the whole data, so we can consider this call as getJobById api call.
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
    // this is the second call, it's to set job list data that appears on the side screen.
    const client = new Jobs();
    // we are handling the page limit by searchParams
    client
      .getAllJobs({
        limit: 8,
        page: Number(searchParams.get("page") || "1") - 1, // -1 to make sure that it matches MUI patination because it starts at 1 not 0
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
      {/* Load the job info card when the data is ready, otherwise load the spinner */}
      {jobData ? (
        <Grid item xs={12} xl={9}>
          <JobInfoCard jobData={jobData} />
        </Grid>
      ) : (
        <Grid
          item
          xs={12}
          xl={9}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
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
