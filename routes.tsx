import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import splashOne from "./app/SplashOne";
import SplashTwo from "./app/SplashTwo";
import Welcome from "./app/Welcome";

export type RootStackProps = {
  SplashOne: undefined;
  Splash: undefined;
  Welcome: undefined;
};

const Stack = createNativeStackNavigator<RootStackProps>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashOne">
        <Stack.Screen
          name="SplashOne"
          component={splashOne}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={SplashTwo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
