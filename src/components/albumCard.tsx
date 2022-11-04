import React from 'react';
import { Image, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { iTunesMusic } from '../helper/api';
import { AppColor } from '../theme/myTheme';

interface IAlbumCard {
  album: iTunesMusic;
}

const Wrapper = styled(View)`
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
`;

const ArtWork = styled(Image)`
  width: 75px;
  height: 75px;
  border-radius: 5px;
  margin-right: 10px;
`;

const AlbumInfo = styled(View)``;

const AlbumTitle = styled(Text)`
  color: ${AppColor.font};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const AlbumArtist = styled(Text)`
  color: ${AppColor.font};
  font-size: 13px;
  font-weight: 300;
`;

export const AlbumCard = ({ album }: IAlbumCard) => {
  const { artworkUrl100, artistName, collectionName } = album;

  return (
    <Wrapper>
      <ArtWork source={{ uri: artworkUrl100 }} />
      <AlbumInfo>
        <AlbumTitle>{collectionName}</AlbumTitle>
        <AlbumArtist>{artistName}</AlbumArtist>
      </AlbumInfo>
    </Wrapper>
  );
};
