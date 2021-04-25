import { IAction } from "config/redux/types/redux.types";
import { ALBUMS_SEARCH_START, ALBUM_DETAIL_CLEAR, ALBUM_DETAIL_START, ALBUM_DETAIL_SUCCESS, IAlbumDetailData } from "../types";

export const initialAlbumDetailState = {
    loading: false,
    data: null,
};

export interface IAlbumDetailState {
    loading: boolean;
    data?: IAlbumDetailData | null;
}

const albumDetailReducer = (
    state: IAlbumDetailState = initialAlbumDetailState,
    action: IAction
): IAlbumDetailState => {
    switch (action.type) {
        case ALBUM_DETAIL_START:
            return {
                data: null,
                loading: true,
            };

        case ALBUM_DETAIL_SUCCESS:
            return {
                loading: false,
                data: action.payload,
            };

        case ALBUMS_SEARCH_START:
        case ALBUM_DETAIL_CLEAR:
            return {
                ...initialAlbumDetailState,
            };
    }

    return state;
}

export default albumDetailReducer;