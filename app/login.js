import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useAuth } from "../context/auth";

const Login = () => {

  // const { signIn } = useAuth();
  return (
    <View>
      <Text>Login</Text>
      <Link href="/parent/fee">Fee</Link>
      <Link href="/(auth)/sign-in">signin</Link>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Text onPress={() => signIn()}>Sign In</Text> */}
    </View>
    </View>

  )
}

export default Login

const styles = StyleSheet.create({})