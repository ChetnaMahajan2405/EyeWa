import apiReducer, { IApiState, initialApiState } from "./api.reducer";
import searchReducer, { IAlbumsState, initialAlbumsSearchState } from "pages/Albums/redux/reducers/search.reducer";
import detailReducer, { IAlbumDetailState, initialAlbumDetailState } from "pages/Albums/redux/reducers/details.reducer";
import { combineReducers } from "redux";

export interface IAppState {
  api: IApiState;
  search: IAlbumsState;
  detail: IAlbumDetailState;
}

export const initialAppState = {
  api: initialApiState,
  search: initialAlbumsSearchState,
  detail: initialAlbumDetailState,
};

const rootReducer = combineReducers({
  api: apiReducer,
  search: searchReducer,
  detail: detailReducer,
});

export default rootReducer;
