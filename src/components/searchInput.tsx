import React, { useState } from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { AppColor } from '../theme/myTheme';

interface ISearchInput {
  callbackSearch: (term: string) => void;
}

const Input = styled(TextInput)`
  width: 100%;
  height: 50px;
  background-color: #323232;
  border-radius: 20px;
  padding: 0px 20px;
  color: ${AppColor.font};
`;

export const SearchInput = ({ callbackSearch }: ISearchInput) => {
  const [text, setText] = useState<string>('');

  return (
    <Input
      value={text}
      onChangeText={setText}
      placeholder="가수명을 입력해주세요..."
      placeholderTextColor="#848484"
      returnKeyType="search"
      onSubmitEditing={() => callbackSearch(text)}
    />
  );
};
