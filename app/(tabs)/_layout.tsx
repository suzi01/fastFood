import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import HomeScreen from ".";
import Orders from "./orders";
import Profile from "./profile";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // TODO
  // need to have 4 Tabs,
  // - HomeScreen
  // - MenuScreen
  // - Cart Screen
  // - Favourites
  // - Settings will not be a page but an icon that leads to other pages
  //   - settings will have:
  //     - previous Orders
  //     - Profile

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: { borderRadius: 20, paddingTop: 10 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color="#ffae3e"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "reorder-four" : "reorder-four-outline"}
              color="#ffae3e"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "bag" : "bag-outline"}
              color="#ffae3e"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "fast-food" : "fast-food-outline"}
              color="#ffae3e"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color="#ffae3e"
            />
          ),
        }}
      />
    </Tabs>
  );
}
