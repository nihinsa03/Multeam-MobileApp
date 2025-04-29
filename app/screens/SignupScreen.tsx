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

type RootStackParamList = {
  Signup: undefined;
  PasswordSetup: undefined;
  Login: undefined; // ✅ Added Login for navigation
};

type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList, "Signup">;

const SignupScreen = () => {
  const navigation = useNavigation<SignupScreenNavigationProp>();

  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [homeAddress, setHomeAddress] = useState("");

  const handleSignup = () => {
    if (!fullName || !mobileNumber || !email || !homeAddress) {
      Alert.alert("Error", "Please fill all fields.");
      return;
    }

    Alert.alert("Success", "Proceed to setup your password.");
    navigation.navigate("PasswordSetup");
  };

  const handleSignIn = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create your account</Text>
      <Text style={styles.subHeader}>Make your life More Smarter</Text>

      <Text style={styles.label}>Full name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        value={fullName}
        onChangeText={setFullName}
      />

      <Text style={styles.label}>Mobile number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your mobile number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Home Address</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter your Home Address"
        value={homeAddress}
        onChangeText={setHomeAddress}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.setupButton} onPress={handleSignup}>
        <Text style={styles.setupButtonText}>Setup your Password</Text>
      </TouchableOpacity>

      <Text style={styles.signinText}>
        Do you have an account?{" "}
        <Text style={styles.signinLink} onPress={handleSignIn}>
          Sign in
        </Text>
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
    marginBottom: 4,
    color: "#1A1A1A",
  },
  subHeader: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 24,
    color: "#555",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 15,
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
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  setupButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 25,
    alignItems: "center",
  },
  setupButtonText: {
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

export default SignupScreen;
