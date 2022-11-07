import React from 'react';
import { Image, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { WIDTH } from '../constant/size';
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
  font-size: ${WIDTH * 0.04}px;
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

  const trimText = (text: string, limit: number) =>
    text.length > limit ? `${text.slice(0, limit)}...` : text;

  return (
    <Wrapper>
      <ArtWork source={{ uri: artworkUrl100 }} />
      <AlbumInfo>
        <AlbumTitle>{trimText(collectionName, 26)}</AlbumTitle>
        <AlbumArtist>{trimText(artistName, 26)}</AlbumArtist>
      </AlbumInfo>
    </Wrapper>
  );
};
