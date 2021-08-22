import styled from 'styled-components';

export const StyledAlbumsWrapper = styled.div`
  button {
    margin: 25px auto 0;
  }
`;

export const StyledAlbums = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: ; */
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  margin-top: 50px;
`;

export const StyledAlbum = styled.li`
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const StyledAlbumImage = styled.div`
  position: relative;
  padding-top: 100%;

  img {
    left: 0;
    min-height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export const StyledAlbumTitle = styled.p`
  text-align: center;
  font-size: 20px;
`;
