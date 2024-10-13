import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { RecipeCard } from '../../components/RecipeCard';
import { data } from '../../data';
import { SearchBar } from '../../components/SearchBar';

export default function RecipesScreen() {
  const [recipes, setRecipes] = useState(data);

  const searchRecipe = (term: string) => {
    if (!term) {
      setRecipes(data);
    } else {
      setRecipes(
        recipes.filter(
          (recipe) =>
            recipe.title.toLowerCase().includes(term) ||
            recipe.duration.toString().includes(term) ||
            recipe.categories.some((category) =>
              category.name.toLowerCase().includes(term),
            ),
        ),
      );
    }
  };

  return (
    <View className="mx-5 flex-1">
      <SearchBar onSearch={searchRecipe} />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginBottom: 10 }}
        data={recipes}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
      />
    </View>
  );
}
