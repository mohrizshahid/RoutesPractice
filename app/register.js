import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Register = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Register</Text>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Link style={styles.btn} href="/login">
          <Text style={styles.btnText}>Login</Text>
        </Link>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  btn: {
    marginVertical: 5,
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    borderColor: 'black'
  },
  btnText: {
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold'
  }
});
