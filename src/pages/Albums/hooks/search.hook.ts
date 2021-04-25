import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAlbumsData, searchAlbums } from "../redux/actions/search.action";
import { IAlbumsState } from "../redux/reducers/search.reducer";
import { ISearchAlbumsParams } from "../redux/types";

const useSearch = (): {
    searchAlbum: (data: ISearchAlbumsParams) => void,
    search: IAlbumsState
} => {
    const { search } = useSelector((state: { search: IAlbumsState }) => state);
    const dispatch = useDispatch();

    const searchAlbum = useCallback((data: ISearchAlbumsParams) => {
        if (data.query) {
            dispatch(searchAlbums(data));
        } else {
            dispatch(clearAlbumsData());
        }

    }, [dispatch]);

    return {
        searchAlbum,
        search,
    };
};

export default useSearch;