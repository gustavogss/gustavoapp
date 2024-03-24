import { SafeAreaView, View } from "react-native";
import { WebView } from "react-native-webview";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.content}>
        <WebView source={{ uri: "https://gustavosouza.dev.br/" }} />
      </View>
    </SafeAreaView>
  );
}
