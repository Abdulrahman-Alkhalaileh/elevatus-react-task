import React from 'react'
import { Box, BoxProps, Typography } from '@mui/material';

export interface JobSummaryRowsProps extends BoxProps{
  data: { label: string; value: any };
}

const JobSummaryRows: React.FC<JobSummaryRowsProps> = ({ data,...props }) => {
  return (
    <Box display="flex" alignItems="center" py={0.5} {...props}>
      <Typography fontWeight={600} minWidth={{ xs: 100, md: 200 }}>
        {data.label}:
      </Typography>
      <Typography variant="body2">{data.value || "---"}</Typography>
    </Box>
  );
}

export default JobSummaryRows;