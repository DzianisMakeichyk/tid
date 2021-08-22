import fetchApi from './fetchAPI';

export const artistsQuery = (query: string) => fetchApi({ path: `search/artist/?q=${query}` });

export const artistAlbumsQuery = (id: number) => fetchApi({ path: `artist/${id}/albums` });

export const loadMore = (path: string) => fetchApi({ path, isFull: true });
