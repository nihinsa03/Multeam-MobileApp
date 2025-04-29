import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  ForgotPassword: undefined;
  ForgotPasswordVerification: undefined; // Next screen after this
};

type ForgotPasswordScreenNavigationProp = StackNavigationProp<RootStackParamList, "ForgotPassword">;

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<ForgotPasswordScreenNavigationProp>();
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Are you forgot something</Text>
      <Text style={styles.subHeader}>
        Enter your email below to receive password reset OTP
      </Text>

      {/* Email Input */}
      <Text style={styles.label}>Email address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Send Code Button */}
      <TouchableOpacity
        style={styles.sendCodeButton}
        onPress={() => navigation.navigate("ForgotPasswordVerification")}
      >
        <Text style={styles.sendCodeText}>Send Code</Text>
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
    paddingHorizontal: 50, // ✅ Adds left-right margin
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    color: "#000",
  },
  subHeader: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    marginTop: 15,
  },
  input: {
    width: "100%", // ✅ Matches login screen input width
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    marginTop: 5,
  },
  sendCodeButton: {
    width: "100%", // ✅ Same width as input fields
    height: 50,
    backgroundColor: "#1FAF38",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  sendCodeText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ForgotPasswordScreen;
