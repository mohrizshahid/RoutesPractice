import { StyleSheet, Text, View } from "react-native";
import { Stack,useRouter,Link } from "expo-router";
import { useAuth } from '../context/auth';
export default function Home() {
  // const { signOut } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Use the `Screen` component to configure the layout. */}
      {/* <Stack.Screen options={{ title: "Overview" }} /> */}
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Link style={styles.btn} href="/login">Login</Link>
      <Link style={styles.btn} href="/register">Register</Link>
    </View>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Text onPress={() => signOut()}>Sign Out</Text> */}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  btn:{
    marginVertical:5,
    borderWidth:1,
    padding:5,
    borderRadius:5
  }
});
