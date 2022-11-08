import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { AlbumCard } from '../../components/albumCard';
import { SearchInput } from '../../components/searchInput';
import { getSerachList, iTunesMusic } from '../../helper/api';
import { Container } from '../../theme/styles';

export const InfiniteFlatList = () => {
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

  return (
    <Container>
      <SearchInput callbackSearch={getData} />
      <FlatList
        style={{ width: '100%' }}
        data={albums}
        renderItem={({ item, index }) => <AlbumCard key={index} album={item} />}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => getData(term)}
        onEndReachedThreshold={0.5}
      />
    </Container>
  );
};
