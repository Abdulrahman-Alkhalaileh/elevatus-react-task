import {
  Box,
  Chip,
  Grid,
  Paper,
  PaperProps,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { JobType } from "../../helpers/types/job";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import JobSummaryRows from "../Lists/JobSummaryRows";

export interface JobInfoCardProps extends PaperProps {
  jobData: JobType;
}

const JobInfoCard: React.FC<JobInfoCardProps> = ({ jobData, ...props }) => {
  const { t } = useTranslation();

  const firstSummarySection = [
    { label: t("jobType"), value: jobData.job_type[0] },
    { label: t("degree"), value: jobData.degree[0] },
    { label: t("industry"), value: jobData.industry[0] },
  ];

  const secondSummarySection = [
    { label: t("major"), value: jobData.major[0] },
    { label: t("nationality"), value: jobData.nationality[0] },
    { label: t("careerLevel"), value: jobData.career_level[0] },
  ];

  return (
    <Paper
      elevation={5}
      {...props}
      sx={{ p: 3, borderRadius: 3, minHeight: 700, ...props.sx }}
    >
      <Stack spacing={4}>
        <Stack spacing={2}>
          <Typography variant="h1" textTransform="capitalize">
            {jobData.title}
          </Typography>
          <Typography color="text.secondary">
            <strong>{t("postedAt")}:</strong>{" "}
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
            {t("description")}
          </Typography>
          <Box dangerouslySetInnerHTML={{ __html: jobData.description }}></Box>
        </Stack>
        <Box>
          <Typography variant="h2" fontWeight={500} gutterBottom>
            {t("summary")}
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
              {firstSummarySection.map((item) => (
                <JobSummaryRows key={crypto.randomUUID()} data={item} />
              ))}
            </Grid>
            <Grid
              item
              md={5}
              width="100%"
              borderLeft={{ xs: 0, md: 1 }}
              borderColor={{ md: "text.disabled" }}
              pl={{ xs: 0, md: 2 }}
            >
              {secondSummarySection.map((item) => (
                <JobSummaryRows key={crypto.randomUUID()} data={item} />
              ))}
            </Grid>
          </Grid>
        </Box>
        <Stack spacing={2}>
          <Typography variant="h2" fontWeight={500}>
            {t("requiredSkills")}
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={3} px={4}>
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
  );
};

export default JobInfoCard;
