import React from 'react';
import { Space } from '../../components/space';
import { RootStackScreenProps } from '../../routes/navigator';
import { Button, ButtonText, Container } from '../../theme/styles';

export const MainPage = ({ navigation }: RootStackScreenProps<'MainPage'>) => {
  return (
    <Container>
      <Button onPress={() => navigation.navigate('FlatList')}>
        <ButtonText>FlatList</ButtonText>
      </Button>
      <Space height={20} />
      <Button onPress={() => navigation.navigate('ScrollView')}>
        <ButtonText>ScrollView</ButtonText>
      </Button>
    </Container>
  );
};
