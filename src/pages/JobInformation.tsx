import React, { useEffect, useState } from "react";
import {
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { JobResults, JobType } from "../helpers/types/job";
import { useParams, useSearchParams } from "react-router-dom";
import Jobs from "../helpers/jobs";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { titleIdSplit } from "../utils/titleIdSplit";
import JobsList from "../components/Lists/JobsList";
import CustomPagination from "../components/Custom/CustomPagination";

export interface JobInformationProps {}

const JobInformation: React.FC<JobInformationProps> = ({ ...props }) => {
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
    <Grid container columnSpacing={1} rowGap={4} flexDirection="row-reverse">
      <Grid item xs={12} xl={9}>
        {jobData && (
          <Paper sx={{ p: 3, borderRadius: 3, minHeight: 700 }} elevation={5}>
            <Stack spacing={4}>
              <Stack spacing={2}>
                <Typography variant="h1" textTransform="capitalize">
                  {jobData.title}
                </Typography>
                <Typography color="text.secondary">
                  <strong>Posted At:</strong>{" "}
                  {new Date(jobData.posted_at).toLocaleString()}
                </Typography>
                <Typography
                  color="text.secondary"
                  textTransform="capitalize"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  <GpsFixedIcon />{" "}
                  {(jobData.location.country || "---") +
                    ", " +
                    (jobData.location.city || "---")}
                </Typography>
              </Stack>
              <Stack spacing={1}>
                <Typography variant="h2" fontWeight={500}>
                  Description
                </Typography>
                <Box
                  dangerouslySetInnerHTML={{ __html: jobData.description }}
                ></Box>
              </Stack>
              <Box>
                <Typography variant="h2" fontWeight={500} gutterBottom>
                  Summary
                </Typography>
                <Grid
                  container
                  border={1}
                  borderColor="text.disabled"
                  borderRadius={2}
                  p={1}
                  columnGap={3}
                >
                  <Grid item md={5} width="100%">
                    <Box display="flex" alignItems="center" py={0.5}>
                      <Typography
                        fontWeight={600}
                        minWidth={{ xs: 100, md: 200 }}
                      >
                        Job Type:
                      </Typography>
                      <Typography variant="body2">
                        {jobData.job_type[0] || "---"}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" py={0.5}>
                      <Typography
                        fontWeight={600}
                        minWidth={{ xs: 100, md: 200 }}
                      >
                        Degree:
                      </Typography>
                      <Typography variant="body2">
                        {jobData.degree[0] || "---"}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" py={0.5}>
                      <Typography
                        fontWeight={600}
                        minWidth={{ xs: 100, md: 200 }}
                      >
                        Industry:
                      </Typography>
                      <Typography variant="body2">
                        {jobData.industry[0] || "---"}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    md={5}
                    width="100%"
                    borderLeft={{ xs: 0, md: 1 }}
                    borderColor={{ md: "text.disabled" }}
                    pl={{ xs: 0, md: 2 }}
                  >
                    <Box display="flex" alignItems="center" py={0.5}>
                      <Typography
                        fontWeight={600}
                        minWidth={{ xs: 100, md: 200 }}
                      >
                        Major:
                      </Typography>
                      <Typography variant="body2">
                        {jobData.major[0] || "---"}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" py={0.5}>
                      <Typography
                        fontWeight={600}
                        minWidth={{ xs: 100, md: 200 }}
                      >
                        Nationality:
                      </Typography>
                      <Typography variant="body2">
                        {jobData.nationality[0] || "---"}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" py={0.5}>
                      <Typography
                        fontWeight={600}
                        minWidth={{ xs: 100, md: 200 }}
                      >
                        Career Level:
                      </Typography>
                      <Typography variant="body2">
                        {jobData.career_level[0] || "---"}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Stack spacing={2}>
                <Typography variant="h2" fontWeight={500}>
                  Required Skills
                </Typography>
                <Box display="flex" gap={3} px={4}>
                  {jobData.skills.map((skill) => (
                    <Chip
                      key={crypto.randomUUID()}
                      label={skill}
                      sx={{
                        width: "fit-content",
                        px: 2,
                        textTransform: "capitalize",
                      }}
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Stack>
            </Stack>
          </Paper>
        )}
      </Grid>
      {jobs && (
        <Grid item xs={12} xl={3} bgcolor="secondary.main" borderRadius={3}>
          <JobsList
            maxHeight={700}
            jobs={jobs.jobs}
            sx={{ overflowY: "auto", overflowX: "hidden" }}
          />
          <Divider />
          <CustomPagination pages={jobs?.pages} size="small" sx={{ pt: 2 }} />
        </Grid>
      )}
    </Grid>
  );
};

export default JobInformation;
