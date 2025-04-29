import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// Define type for navigation
type RootStackParamList = {
  PasswordSetup: undefined;
  SignupSuccess: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, "PasswordSetup">;

const PasswordSetupScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (!password || !confirmPassword) {
      Alert.alert("Error", "Please fill in both fields.");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    Alert.alert("Success", "Account created successfully!");
    navigation.navigate("SignupSuccess");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create your unique</Text>
      <Text style={styles.header}>Password</Text>

      <Text style={styles.label}>New Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter new password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Confirm your Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.signupButton} onPress={handleSubmit}>
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.signinText}>
        Do you have an account? <Text style={styles.signinLink}>Sign in</Text>
      </Text>

      <Text style={styles.orText}>Or Continue with</Text>

      <View style={styles.socialContainer}>
        <Image
          source={require("../../assets/images/googlec.png")}
          style={styles.icon}
        />
        <Image
          source={require("../../assets/images/facebook.png")}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1A1A1A",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 20,
    marginBottom: 5,
    color: "#000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  signupButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 25,
    alignItems: "center",
  },
  signupText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  signinText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
    color: "#000",
  },
  signinLink: {
    color: "#4CAF50",
    fontWeight: "600",
  },
  orText: {
    textAlign: "center",
    marginTop: 25,
    marginBottom: 10,
    fontSize: 14,
    color: "#000",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  icon: {
    width: 36,
    height: 36,
    resizeMode: "contain",
    marginHorizontal: 10,
  },
});

export default PasswordSetupScreen;
