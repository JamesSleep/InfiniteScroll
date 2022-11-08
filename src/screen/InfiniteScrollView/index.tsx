import React, { useState } from 'react';
import { NativeScrollEvent, ScrollView, Text, View } from 'react-native';
import { AlbumCard } from '../../components/albumCard';
import { SearchInput } from '../../components/searchInput';
import { getSerachList, iTunesMusic } from '../../helper/api';
import { Container } from '../../theme/styles';

export const InfiniteScrollView = () => {
  const [albums, setAlbums] = useState<iTunesMusic[]>([]);
  const [page, setPage] = useState<number>(1);
  const [term, setTerm] = useState<string>('');

  const getData = async (text: string) => {
    if (!term) setTerm(text);
    if (term && term !== text) {
      setTerm(text);
      setPage(1);
    }

    const result = await getSerachList(text, page);

    if (result.length === albums.length) return;

    setAlbums(result);
    setPage(page + 1);
  };

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    const paddingToBottom = 100;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <Container>
      <SearchInput callbackSearch={getData} />
      <ScrollView
        contentContainerStyle={{ width: '100%' }}
        onScrollEndDrag={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            getData(term);
          }
        }}
        scrollEventThrottle={100}
      >
        {albums.length > 0 &&
          albums.map((album, index) => <AlbumCard key={index} album={album} />)}
      </ScrollView>
    </Container>
  );
};
