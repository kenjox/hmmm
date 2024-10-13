import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { Recipe } from '../types';
import { Link } from 'expo-router';

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
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
    >
      <TouchableOpacity
        activeOpacity={0.8}
        className="border-1 mx-5 mb-4 h-[230px] rounded-md border border-gray-300 bg-[#FFF9F9] shadow-lg"
      >
        <Image className="flex-1" source={photoUrl} contentFit="cover" />
        <View className="space-y-2 p-5 shadow-lg">
          <View className="flex flex-row justify-between">
            <Text className="text-lg text-gray-500">{title}</Text>
            <Text className="text-lg text-gray-500">{duration}min</Text>
          </View>
          <View className="flex flex-row flex-wrap gap-1">
            {categories.length > 0 &&
              categories.map(({ id, name }) => (
                <View
                  key={id}
                  className="w-1/3 rounded-md bg-[#F4F5F7] p-1 shadow-md"
                >
                  <Text className="text-center font-bold tracking-wide text-gray-500">
                    {name}
                  </Text>
                </View>
              ))}
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
