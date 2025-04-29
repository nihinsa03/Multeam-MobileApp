import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  PasswordResetSuccess: undefined;
  Login: undefined;
};

type PasswordResetSuccessScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "PasswordResetSuccess"
>;

const PasswordResetSuccessScreen = () => {
  const navigation = useNavigation<PasswordResetSuccessScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Password Reset Successfully</Text>

      {/* Log In Button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#000",
  },
  loginButton: {
    width: "50%",
    height: 50,
    backgroundColor: "#1FAF38",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PasswordResetSuccessScreen;
