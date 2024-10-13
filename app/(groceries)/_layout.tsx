import React from 'react';
import { Stack } from 'expo-router';

export default function GroceryLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Shopping List' }} />
    </Stack>
  );
}
