import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import { StatusBar } from "react-native";
import SignIn from "@screens/signIn/SignIn";
import Loading from "@components/loading/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <SignIn />
    </ThemeProvider>
  );
}
