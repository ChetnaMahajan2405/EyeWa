import { IAction, TDispatch } from "config/redux/types/redux.types";
import { AlbumsActionTypes, ALBUMS_SEARCH_CLEAR, ALBUMS_SEARCH_SUCCESS, IAlbumsData, ISearchAlbumsParams } from "../types";
import { EApiMiddlewareMethods } from 'config/redux/middleware/api.middleware.types';
import { isNonEmptyArray } from "utils/helpers.util";
import { SEARCH_ALBUMS_URL } from "constant/api.url";

export const setAlbumsData = (payload: IAlbumsData[]): IAction => ({
  type: ALBUMS_SEARCH_SUCCESS,
  payload,
});

export const clearAlbumsData = (): IAction => ({
  type: ALBUMS_SEARCH_CLEAR,
});


export const searchAlbums = (params: ISearchAlbumsParams) => (dispatch: TDispatch<any>) => {
  dispatch({
    type: AlbumsActionTypes.ALBUMS_SEARCH,
    payload: {
      method: EApiMiddlewareMethods.GET,
      onSuccess: (payload: any) => {
        if (isNonEmptyArray(payload.results)) {
          dispatch(setAlbumsData(payload.results));

        } else {
          dispatch(clearAlbumsData());
        }

      },
      onFailure: () => dispatch(clearAlbumsData()),
      url: SEARCH_ALBUMS_URL,
      params,
    },
  });
};
