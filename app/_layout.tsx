import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RootSiblingParent } from "react-native-root-siblings";
import { CartProvider } from "@/context/CartContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <CartProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <RootSiblingParent>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="(modal)/filter"
              options={{
                headerTitleAlign: "center",
                presentation: "modal",
                headerTitle: "Filter",
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: Colors["off-white"],
                },
                headerLeft: () => (
                  <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="close" size={30} color="#ffae3e" />
                  </TouchableOpacity>
                ),
              }}
            />
            <Stack.Screen
              name="(modal)/search"
              options={{
                headerTitleAlign: "center",
                presentation: "modal",
                headerTitle: "Search",
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: Colors["off-white"],
                },
                headerLeft: () => (
                  <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="close" size={30} color="#ffae3e" />
                  </TouchableOpacity>
                ),
              }}
            />
            <Stack.Screen name="[id]" options={{ headerShown: false }} />
            <Stack.Screen
              name="(details)"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="order-summary"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="favourites" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </RootSiblingParent>
      </ThemeProvider>
    </CartProvider>
  );
}
