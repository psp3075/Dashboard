import React from "react";
import FlexBetween from "./FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";

type Props = {
  icon?: React.ReactNode; //? : optional
  title: string;
  subtitle?: string;
  sideText: string;
};

const BoxHeader = (props: Props) => {
  const { palette } = useTheme();
  return (
    <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        {props.icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {props.title}
          </Typography>
          <Typography variant="h6">{props.subtitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
        {props.sideText}
      </Typography>
    </FlexBetween>
  );
};

export default BoxHeader;
