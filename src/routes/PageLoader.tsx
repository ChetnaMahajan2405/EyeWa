import React from "react";
import { Box, CircularProgress } from "@material-ui/core";

const PageLoader: React.FC = () => (
  <Box my={20} textAlign="center">
    <CircularProgress />
  </Box>
);

export default PageLoader;
