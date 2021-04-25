import { useLocation } from "react-router-dom";
import { Container, Typography, Box } from "@material-ui/core";

const NoMatch = () => {
  const location = useLocation();

  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Typography align="center" variant="h4" component="h1" gutterBottom>
          No match for <code>{location.pathname}</code>
        </Typography>
      </Box>
    </Container>
  );
};

export default NoMatch;
