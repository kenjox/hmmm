import React from 'react';
import { FlatList, View } from 'react-native';
import RecipeCard from '../../components/RecipeCard';
import { data } from '../../data';

export default function RecipesPage() {
  return (
    <View className="flex-1">
      <FlatList
        contentContainerStyle={{ marginBottom: 10 }}
        data={data}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
      />
    </View>
  );
}
