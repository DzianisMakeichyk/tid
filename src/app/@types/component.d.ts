interface ArtistValue {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album: number;
  nb_fun: number;
  radio: boolean;
  tracklist: string;
  type: boolean;
}

interface ArtistAlbumValue {
  id: number;
  title: string;
  link: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: number;
  genre_id: number;
  funs: number;
  release_date: string;
  record_type: string;
  tracklist: string;
  explicit_lyrics: boolean;
  type: string;
}
