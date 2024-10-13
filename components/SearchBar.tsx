import { View, TextInput } from 'react-native';
import React from 'react';

type SearchBarProps = {
  searchTerm: string;
  onSearch: () => void;
};

export function SearchBar({ searchTerm, onSearch }: SearchBarProps) {
  return (
    <View className="my-3 flex h-14 flex-row">
      <TextInput
        className="border-1 flex-1 rounded-md border border-gray-400 px-4 text-lg"
        placeholder="Search ..."
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        value={searchTerm}
        onEndEditing={onSearch}
      />
    </View>
  );
}
