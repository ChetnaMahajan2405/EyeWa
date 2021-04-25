import { memo } from "react";
import { Divider, Box, List, ListItem, ListItemText } from "@material-ui/core";
import { isNonEmptyArray } from "utils/helpers.util";
import { IAlbumsData } from "../redux/types";

interface Props {
  results: IAlbumsData[] | [];
  updateDetails: (data: any) => void;
}

const SearchResults = ({ results, updateDetails }: Props) => {
  if (!isNonEmptyArray(results)) {
    return null;
  }

  return (
    <List>
      {results.map((data: IAlbumsData) => {
        const onClick = () => updateDetails(data);
        return (
          <Box key={data.id}>
            <ListItem button onClick={onClick}>
              <ListItemText primary={data.title} />
            </ListItem>
            <Divider />
          </Box>
        );
      })}
    </List>
  );
};

export default memo(SearchResults);
