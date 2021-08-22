import { createAsyncAction, errorResult, successResult } from 'pullstate';
import { artistsQuery, artistAlbumsQuery, loadMore } from '../../api/API';

import ArtistStore from './ArtistStore';

export const getArtistQueryAction = createAsyncAction(
  async ({ query }) => {
    if (query === null || query === undefined) {
      return errorResult([], 'Missing query');
    }

    const data = await artistsQuery(query);

    if (data.errors) {
      return errorResult([], `Couldn't get data`);
    }

    return successResult({
      artistsQuery: data.data,
    });
  },
  {
    postActionHook: ({ result }) => {
      if (result.error) return;

      ArtistStore.update((s) => {
        s.artistsQuery = result.payload.artistsQuery;
      });
    },
    cacheBreakHook: () => true, // Always fetch fresh data from api
  },
);

export const getArtistAlbumsQueryAction = createAsyncAction(
  async ({ id }) => {
    if (id === null || id === undefined) {
      return errorResult([], 'Missing id');
    }

    const data = await artistAlbumsQuery(id);

    if (data.errors) {
      return errorResult([], `Couldn't get data`);
    }

    return successResult({
      artistAlbumQuery: data.data,
      artistAlbumNext: data.next,
    });
  },
  {
    postActionHook: ({ result }) => {
      if (result.error) return;

      ArtistStore.update((s) => {
        s.artistAlbumQuery = result.payload.artistAlbumQuery;
        s.artistAlbumNext = result.payload.artistAlbumNext;
      });
    },
    cacheBreakHook: () => true, // Always fetch fresh data from api
  },
);

export const loadMoreArtistAlbumsAction = createAsyncAction(
  async () => {
    const { artistAlbumNext: path } = ArtistStore.getRawState();

    if (path === null || path === undefined) {
      return errorResult([], 'Missing path');
    }

    const data = await loadMore(path);

    if (data.errors) {
      return errorResult([], `Couldn't load more data`);
    }

    return successResult({
      artistAlbumQuery: data.data,
      artistAlbumNext: data.next,
    });
  },
  {
    postActionHook: ({ result }) => {
      if (result.error) {
        return;
      }

      ArtistStore.update((s) => {
        s.artistAlbumQuery = [...s.artistAlbumQuery, ...result.payload.artistAlbumQuery];
        s.artistAlbumNext = result.payload.artistAlbumNext;
      });
    },
    cacheBreakHook: () => true, // Always fetch fresh data from api
  },
);
