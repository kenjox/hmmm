import React from 'react';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
  return (
    <Tabs
      initialRouteName="(recipes)"
      screenOptions={{
        tabBarActiveTintColor: '#000',
      }}
    >
      <Tabs.Screen
        name="(recipes)"
        options={{
          title: 'Recipes',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="restaurant" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(groceries)"
        options={{
          title: 'Shopping List',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="shopping-basket" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
