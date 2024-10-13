import { View, TextInput } from 'react-native';
import React, { useState } from 'react';

type SearchBarProps = {
  onSearch: (term: string) => void;
};

export function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchForTerm = (term: string) => {
    setSearchTerm(term);
    onSearch(term.toLowerCase());
  };

  return (
    <View className="my-3 flex h-14 flex-row">
      <TextInput
        className="border-1 flex-1 rounded-md border border-gray-400 px-4 text-lg"
        placeholder="Search ..."
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        value={searchTerm}
        onChangeText={searchForTerm}
      />
    </View>
  );
}
