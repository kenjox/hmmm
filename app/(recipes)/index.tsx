import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { RecipeCard } from '../../components/RecipeCard';
import { data } from '../../data';
import { SearchBar } from '../../components/SearchBar';

export default function RecipesScreen() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View className="mx-5 flex-1">
      <SearchBar
        searchTerm={searchTerm}
        onSearch={() => console.log('Search recipe')}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginBottom: 10 }}
        data={data}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
      />
    </View>
  );
}
