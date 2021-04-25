import { EApiMiddlewareMethods } from "config/redux/middleware/api.middleware.types";
import { IAction, TDispatch } from "config/redux/types/redux.types";
import { AlbumsActionTypes, ALBUM_DETAIL_CLEAR, ALBUM_DETAIL_SUCCESS } from "../types";

export const setAlbumDetail = (payload: any): IAction => ({
    type: ALBUM_DETAIL_SUCCESS,
    payload,
});

export const clearAlbumDetail = (): IAction => ({
    type: ALBUM_DETAIL_CLEAR,
});

export const getAlbum = (url: string) => (dispatch: TDispatch<any>) => {
    dispatch({
        type: AlbumsActionTypes.ALBUM_DETAIL,
        payload: {
            method: EApiMiddlewareMethods.GET,
            onSuccess: (payload: any) => {
                if ((payload.id)) {
                    dispatch(setAlbumDetail(payload));

                } else {
                    dispatch(clearAlbumDetail());
                }

            },
            onFailure: () => dispatch(clearAlbumDetail()),
            url,
        },
    });
};