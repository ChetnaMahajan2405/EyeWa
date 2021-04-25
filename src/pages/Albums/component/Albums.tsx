import { Box, Container, Typography } from "@material-ui/core";
import Search from "./Search";

const Albums = () => {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Typography align="center" variant="h4" component="h1" gutterBottom>
          Albums
        </Typography>
      </Box>
      <Search />
    </Container>
  );
};

export default Albums;
