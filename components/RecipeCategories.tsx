import { View, Text } from 'react-native';
import React from 'react';
import { Category } from '../types';

type CategoriesTagsProps = {
  categories: Category[];
};

export function CategoriesTags({ categories }: CategoriesTagsProps) {
  return (
    <View className="flex flex-row flex-wrap gap-1">
      {categories.length > 0 &&
        categories.map(({ id, name }) => (
          <View key={id} className="w-1/4 rounded-md bg-gray-700 p-1 shadow-md">
            <Text className="text-center font-bold tracking-wide text-white">
              {name}
            </Text>
          </View>
        ))}
    </View>
  );
}
