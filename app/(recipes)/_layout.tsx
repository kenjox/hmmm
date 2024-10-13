import React from 'react';
import { Link, Stack } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import { TouchableOpacity } from 'react-native';

export default function RecipeLayout() {
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Link href="/create" asChild>
            <TouchableOpacity>
              <Feather name="plus" size={30} color="gray" />
            </TouchableOpacity>
          </Link>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Recipes' }} />
      <Stack.Screen name="[id]" />
      <Stack.Screen name="create" options={{ title: 'Add new recipe' }} />
    </Stack>
  );
}
