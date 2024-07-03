import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/screens/Home";
import NewListScreen from "./app/screens/NewList";
import ListScreen from "./app/screens/List";
import { useEffect } from "react";
import { useColorScheme } from "nativewind";
import { storeData } from "./app/utils/Storage";
import Camera from "./app/screens/Camera";
import Picture from "./app/screens/Picture";

const Stack = createNativeStackNavigator();

export default function App() {
  const { colorScheme, setColorScheme } = useColorScheme();
  useEffect(() => {
    setColorScheme("dark");
    storeData("lists", []);
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
        <Stack.Screen name="NewList" component={NewListScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Cam" component={Camera} />
        <Stack.Screen name="Picture" component={Picture} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
