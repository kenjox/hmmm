import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Image } from 'expo-image';
import { Recipe } from '../../types';

export default function DetailRecipePage() {
  const { data } = useLocalSearchParams();
  const { title, photoUrl, duration, categories, ingredients, steps } =
    JSON.parse(data as string) as Recipe;

  return (
    <ScrollView>
      <Stack.Screen options={{ title }} />
      <View className="rounded-md border-0 border-gray-300 bg-[#FFF9F9] px-0 pb-5 shadow-lg">
        <View className="h-[250px]">
          <Image className="flex-1" source={photoUrl} contentFit="cover" />
        </View>
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
                  className="w-1/4 rounded-md bg-[#F4F5F7] p-1 shadow-md"
                >
                  <Text className="text-center font-bold tracking-wide text-gray-500">
                    {name}
                  </Text>
                </View>
              ))}
          </View>
        </View>
        <View className="mb-2 mt-2 px-5">
          <Text className="text-xl font-bold text-gray-500">Ingredients</Text>
        </View>
        <View className="mx-5">
          {ingredients.length > 0 &&
            ingredients.map((item, index) => (
              <View
                key={index}
                className="border-1 mb-1 border-b border-b-blue-200"
              >
                <Text className="text-base">{item}</Text>
              </View>
            ))}
        </View>
        <View className="mb-2 mt-2 px-5">
          <Text className="text-xl font-bold text-gray-500">Steps</Text>
        </View>
        <View className="mx-5">
          {steps.length > 0 &&
            steps.map((item, index) => (
              <View
                key={index}
                className="border-1 mb-1 border-b border-b-blue-200"
              >
                <Text className="text-base">{`${index + 1}. ${item}`}</Text>
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  );
}
