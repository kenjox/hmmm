import React from 'react';
import { router, Stack } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import { TouchableOpacity } from 'react-native';

export default function RecipeLayout() {
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity onPress={() => router.push('/create')}>
            <Feather name="plus" size={30} color="gray" />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Recipes' }} />
      <Stack.Screen name="[id]" />
      <Stack.Screen
        name="create"
        options={{ title: 'Add new recipe', presentation: 'modal' }}
      />
    </Stack>
  );
}
