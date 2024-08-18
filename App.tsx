import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AppNavigator } from "./routes";

export default function App() {

  return (
    <GestureHandlerRootView>
      <AppNavigator />
    </GestureHandlerRootView>
  );
}
