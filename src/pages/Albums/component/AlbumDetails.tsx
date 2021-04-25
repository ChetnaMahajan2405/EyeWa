import { memo } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import {
  IAlbumArtists,
  IAlbumDetailData,
  IAlbumTracklist,
} from "../redux/types";

interface Props {
  data: IAlbumDetailData;
}

const Details = ({ data }: Props) => {
  const getMappedData = (array: string[]) => {
    return array.map((el: string, key: number) => {
      if (key === array.length - 1) {
        return el;
      } else {
        return el + ", ";
      }
    });
  };

  return (
    <Box m={2}>
      <Typography>
        <b>Title:</b> {data.title}
      </Typography>
      <Typography>
        <b>Genres:</b> {getMappedData(data.genres)}
      </Typography>
      <Typography>
        <b>Styles: </b> {getMappedData(data.styles)}
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>#</b>
              </TableCell>
              <TableCell>
                <b>Title</b>
              </TableCell>
              <TableCell>
                <b>Artists</b>
              </TableCell>
              <TableCell>
                <b>Time</b>
              </TableCell>
              <TableCell>
                <b>Released</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.tracklist.map(
              ({ position, title, duration }: IAlbumTracklist, key: number) => (
                <TableRow key={position}>
                  <TableCell>{key + 1}</TableCell>
                  <TableCell>{title}</TableCell>
                  <TableCell>
                    {data.artists.map(({ name }: IAlbumArtists) => name + " ")}
                  </TableCell>
                  <TableCell>{duration || "-"}</TableCell>
                  <TableCell>{data.year || "-"}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default memo(Details);
