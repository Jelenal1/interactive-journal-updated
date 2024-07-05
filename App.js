import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Article from "./app/screens/Article";
import Home from "./app/screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#94a3b8",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            color: "black",
          },
        }}
      >
        <Stack.Screen name="Interactive Journal" component={Home} />
        <Stack.Screen name="Article" component={Article} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
