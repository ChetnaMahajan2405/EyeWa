import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAlbumDetail, getAlbum } from "../redux/actions/details.action";
import { IAlbumDetailState } from "../redux/reducers/details.reducer";

const useDetails = (): {
    getAlbumDetail: (url: string) => void,
    detail: IAlbumDetailState
} => {
    const { detail } = useSelector((state: { detail: IAlbumDetailState }) => state);
    const dispatch = useDispatch();

    const getAlbumDetail = useCallback((data: string) => {
        if (data) {
            dispatch(getAlbum(data));
        } else {
            dispatch(clearAlbumDetail());
        }

    }, [dispatch]);

    return {
        getAlbumDetail,
        detail,
    };
};

export default useDetails;