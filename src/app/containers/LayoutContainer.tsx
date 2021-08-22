import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { getArtistQueryAction, getArtistAlbumsQueryAction, loadMoreArtistAlbumsAction } from '../store';

import ArtistStore from '../store/Artist/ArtistStore';

import Dropdown from '../components/Dropdown';
import Search from '../components/Search';
import Album from '../components/Album';

import { StyledAlbums, StyledAlbumsWrapper } from '../components/Album/styles';
import { StyledContainerWrapper } from '../../styles/styles';
import Button from '../components/Button';

const LayoutContainer = () => {
  const { artistsQuery, artistAlbumQuery, artistAlbumNext } = ArtistStore.useState();

  const [searchingValue, setSearchingValue] = useState<string | null>(null);
  const [artistId, setArtistId] = useState<number | null>(null);

  getArtistAlbumsQueryAction.useBeckon({ id: artistId });
  const [finishedLoadingArtists] = getArtistQueryAction.useBeckon({ query: searchingValue });

  const onSearchDebounced = useDebouncedCallback(
    (value) => setSearchingValue(value),
    // delay in ms
    500,
  );

  const onLoadMore = async () => {
    await loadMoreArtistAlbumsAction.run();
  };

  const onAlbumClick = (id: number) => console.log('Album id:', id);

  return (
    <StyledContainerWrapper>
      <Search placeholder="Search here" buttonLabel="Search" onSearch={onSearchDebounced} />
      {artistsQuery && artistsQuery.length > 0 ? (
        <Dropdown
          onClick={setArtistId}
          options={artistsQuery}
          label="Search results"
          finished={finishedLoadingArtists}
        />
      ) : (
        ''
      )}
      {artistAlbumQuery && artistAlbumQuery.length > 0 ? (
        <StyledAlbumsWrapper>
          <StyledAlbums>
            {artistAlbumQuery.map((album) => (
              <Album data={album} key={album.id} onClick={onAlbumClick}></Album>
            ))}
          </StyledAlbums>
          {artistAlbumNext ? <Button onClick={onLoadMore}>Next</Button> : ''}
        </StyledAlbumsWrapper>
      ) : (
        ''
      )}
      {/* TrackList */}
    </StyledContainerWrapper>
  );
};

export default LayoutContainer;
