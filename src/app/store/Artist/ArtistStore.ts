import { Store } from 'pullstate';

interface IArtistStore {
  artistsQuery: ArtistValue[];
  artistAlbumQuery: ArtistAlbumValue[];
  artistAlbumNext: string | null;
}

const ArtistStore = new Store<IArtistStore>({
  artistsQuery: [],
  artistAlbumQuery: [],
  artistAlbumNext: null,
});

export type { IArtistStore };

export default ArtistStore;
