import { IAction } from "config/redux/types/redux.types";
import { ALBUMS_SEARCH_CLEAR, ALBUMS_SEARCH_START, ALBUMS_SEARCH_SUCCESS, IAlbumsData } from "../types";

export const initialAlbumsSearchState = {
    loading: false,
    results: [],
};

export interface IAlbumsState {
    loading: boolean;
    results: IAlbumsData[] | [];
}

const albumsSearchReducer = (
    state: IAlbumsState = initialAlbumsSearchState,
    action: IAction
): IAlbumsState => {
    switch (action.type) {
        case ALBUMS_SEARCH_START:
            return {
                results: [],
                loading: true,
            };

        case ALBUMS_SEARCH_SUCCESS:
            return {
                loading: false,
                results: action.payload,
            };


        case ALBUMS_SEARCH_CLEAR:
            return {
                ...initialAlbumsSearchState,
            };
    }

    return state;
}

export default albumsSearchReducer;