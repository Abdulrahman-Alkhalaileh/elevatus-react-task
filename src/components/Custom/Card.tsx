import React from "react";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Divider,
  Paper,
  PaperProps,
  Typography,
} from "@mui/material";
import { JobType } from "../../helpers/types/job";
import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

export interface CardProps extends PaperProps {
  job: JobType;
}

const Card: React.FC<CardProps> = ({ job, ...props }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearachParams] = useSearchParams();
  const {t} = useTranslation()

  return (
    <Paper
      {...props}
      elevation={6}
      sx={{
        width: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 1,
        flexGrow: { xs: 1, md: 0 },
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {t("jobTitle")}
        </Typography>
        <Typography
          variant="h2"
          component="div"
          fontWeight={600}
          gutterBottom
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          overflow="hidden"
        >
          {job.title}
        </Typography>
        <Divider />
        <Typography color="text.secondary" variant="body2" pt={1}>
          {t("jobType")}
        </Typography>
        {job.job_type[0] ? (
          <Typography variant="h5" pb={2}>
            {job.job_type[0]}
          </Typography>
        ) : (
          <Typography variant="body2" color="text.secondary" pb={2}>
            ---
          </Typography>
        )}
        <Box display='flex' alignItems='center' gap={1}>
        <GpsFixedIcon/>
        {job.location.city ? (
          <Typography variant="h5" textTransform='capitalize' >{job.location.country + ' - '+job.location.city}</Typography>
        ) : (
          <Typography variant="body2" color="text.secondary">
            ---
          </Typography>
        )}
        </Box>
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 1,
          alignItems: "center",
        }}
      >
        <Link
          to={`/${job.title + "-" + job.uuid.split("-")[0]}?${searchParams}`}
          preventScrollReset={false}
        >
          <Button
            variant="contained"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {t('viewMore')}
          </Button>
        </Link>
      </CardActions>
    </Paper>
  );
};

export default Card;
