import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { Recipe } from '../types';
import { Link } from 'expo-router';
import { CategoriesTags } from './RecipeCategories';

type RecipeCardProps = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
  const { id, title, duration, photoUrl, categories } = recipe;

  return (
    <Link
      href={{
        pathname: String(id),
        params: {
          data: JSON.stringify(recipe),
        },
      }}
      asChild
      className="mb-5 rounded-lg border-0 bg-white shadow-lg"
    >
      <TouchableOpacity activeOpacity={0.9}>
        <Image
          className="h-[180px] rounded-md border-0"
          source={photoUrl}
          contentFit="cover"
        />
        <View className="space-y-2 p-2">
          <CategoriesTags categories={categories} />
          <View className="flex flex-row justify-between">
            <Text className="text-lg text-gray-500">{title}</Text>
            <Text className="text-lg text-gray-500">{duration}min</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
