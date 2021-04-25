import { memo } from "react";
import { Box, Button } from "@material-ui/core";
import useDetails from "../hooks/details.hook";
import { IAlbumsData } from "../redux/types";
import AlbumDetails from "./AlbumDetails";
import PageLoader from "routes/PageLoader";

interface Props {
  details: IAlbumsData;
}

const SearchDetails = ({ details }: Props) => {
  const {
    getAlbumDetail,
    detail: { loading, data },
  } = useDetails();

  return (
    <>
      <Button onClick={() => getAlbumDetail(details.master_url)}>
        <Box m={2}>
          <img src={details.thumb} alt={details.title} />
        </Box>
      </Button>
      {data && <AlbumDetails data={data} />}
      {loading && <PageLoader />}
    </>
  );
};

export default memo(SearchDetails);
