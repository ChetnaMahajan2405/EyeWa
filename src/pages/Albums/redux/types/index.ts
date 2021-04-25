import EApiActionTypes from "config/redux/types/api.types";

export enum AlbumsActionTypes {
  ALBUMS_SEARCH = "ALBUMS/SEARCH_ALBUMS_DATA",
  ALBUM_DETAIL = "ALBUMS/DETAIL_ALBUM_DATA",
}

export interface ISearchAlbumsParams {
  query: string;
}

export interface IAlbumsData {
  country: string;
  year: string;
  id: number;
  master_url: string;
  thumb: string;
  cover_image: string;
  title: string;
}

export interface IAlbumTracklist {
  position: string;
  duration: string;
  title: string;
}

export interface IAlbumArtists {
  name: string;
  title: string;
  id: string;
}

export interface IAlbumArtistImage {
  uri150: string;
}

export interface IAlbumDetailData {
  year: string;
  id: number;
  title: string;
  tracklist: IAlbumTracklist[];
  artists: IAlbumArtists[];
  images: IAlbumArtistImage[];
  genres: string[];
  styles: string[];
}

export const ALBUMS_SEARCH_START = `${AlbumsActionTypes.ALBUMS_SEARCH}${EApiActionTypes.API_START}`;
export const ALBUMS_SEARCH_SUCCESS = `${AlbumsActionTypes.ALBUMS_SEARCH}${EApiActionTypes.API_SUCCESS}`;
export const ALBUMS_SEARCH_CLEAR = `${AlbumsActionTypes.ALBUMS_SEARCH}${EApiActionTypes.API_CLEAR}`;


export const ALBUM_DETAIL_START = `${AlbumsActionTypes.ALBUM_DETAIL}${EApiActionTypes.API_START}`;
export const ALBUM_DETAIL_SUCCESS = `${AlbumsActionTypes.ALBUM_DETAIL}${EApiActionTypes.API_SUCCESS}`;
export const ALBUM_DETAIL_CLEAR = `${AlbumsActionTypes.ALBUM_DETAIL}${EApiActionTypes.API_CLEAR}`;