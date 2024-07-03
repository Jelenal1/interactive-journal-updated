import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/screens/Home";
import { useEffect } from "react";
import { useColorScheme } from "nativewind";

const Stack = createNativeStackNavigator();

export default function App() {
  const { colorScheme, setColorScheme } = useColorScheme();
  useEffect(() => {
    setColorScheme("dark");
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            color: "black",
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
