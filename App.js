import Article from "./app/screens/Article";
import Home from "./app/screens/Home";
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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Article" component={Article} />
    </NavigationContainer>
  );
}
