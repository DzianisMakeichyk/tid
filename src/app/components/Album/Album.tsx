import React from 'react';

import { StyledAlbum, StyledAlbumImage, StyledAlbumTitle } from './styles';

interface AlbumProps {
  onClick: (el: number) => void;
  data: ArtistAlbumValue;
}

const Album = ({ data, onClick }: AlbumProps) => {
  const { cover_xl, cover_big, cover_medium, cover, title, id } = data;

  return (
    <StyledAlbum onClick={() => onClick(id)}>
      <StyledAlbumImage>
        <picture>
          <source srcSet={`${cover_xl} 2x, ${cover_big} 1x`} media="(min-width: 1024px)" />
          <source srcSet={`${cover_medium}?w=180&q=70`} media="(max-width: 1023px)" />
          <img src={cover} alt={title} />
        </picture>
      </StyledAlbumImage>
      <StyledAlbumTitle>{title}</StyledAlbumTitle>
    </StyledAlbum>
  );
};

export default Album;
