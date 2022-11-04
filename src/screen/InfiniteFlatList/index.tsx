import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { AlbumCard } from '../../components/albumCard';
import { SearchInput } from '../../components/searchInput';
import { getSerachList, iTunesMusic } from '../../helper/api';
import { ButtonText, Container } from '../../theme/styles';

export const InfiniteFlatList = () => {
  const [albums, setAlbums] = useState<iTunesMusic[]>([]);

  const getData = async (term: string) => {
    const result = await getSerachList(term);
    setAlbums(result);
  };

  return (
    <Container>
      <SearchInput callbackSearch={getData} />
      <ScrollView>
        {albums.map((album, index) => (
          <AlbumCard key={index} album={album} />
        ))}
      </ScrollView>
    </Container>
  );
};
