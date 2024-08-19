"use client";
import {
  Button,
  CardActions,
  CardContent,
  Divider,
  Paper,
  PaperProps,
  Typography,
} from "@mui/material";
import React from "react";
import { JobType } from "../../helpers/types/job";

export interface CardProps extends PaperProps {
  job: JobType;
}

const Card: React.FC<CardProps> = ({ job, ...props }) => {
  return (
    <Paper
      {...props}
      elevation={4}
      sx={{
        width: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 1,
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Job Title
        </Typography>
        <Typography
          variant="h2"
          component="div"
          fontWeight={600}
          gutterBottom
          whiteSpace='nowrap'
          textOverflow="ellipsis"
          overflow="hidden"
        >
          {job.title}
        </Typography>
        <Divider />
        <Typography color="text.secondary" variant="body2" pt={1}>
          Career Level
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
        <Typography color="text.secondary" variant="body2">
          Location
        </Typography>
        {job.location.city ? (
          <Typography variant="h5">{job.location.city}</Typography>
        ) : (
          <Typography variant="body2" color="text.secondary">
            ---
          </Typography>
        )}
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
        <Button variant="contained">View More</Button>
      </CardActions>
    </Paper>
  );
};

export default Card;
