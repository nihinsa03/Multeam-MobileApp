import React, { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  ForgotPasswordVerification: undefined;
  ResetPassword: undefined; // Ensure ResetPassword is defined here
};

type ForgotPasswordVerificationNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ForgotPasswordVerification"
>;

const ForgotPasswordVerificationScreen = () => {
  const navigation = useNavigation<ForgotPasswordVerificationNavigationProp>();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    if (!isNaN(Number(text))) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (text !== "" && index < 3) {
        inputs.current[index + 1]?.focus();
      }
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length === 4) {
      Alert.alert("Success", "OTP Verified Successfully!");
      navigation.navigate("ResetPassword"); // Navigate to Reset Password screen
    } else {
      Alert.alert("Error", "Please enter a valid 4-digit OTP.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Verify your email?</Text>
      <Text style={styles.subHeader}>Enter the OTP received in your (4-digit)</Text>

      {/* OTP Input Fields */}
      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

      {/* Verify Email Button */}
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyText}>Verify email</Text>
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
    marginBottom: 5,
    color: "#000",
  },
  subHeader: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
  },
  verifyButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#1FAF38",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  verifyText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ForgotPasswordVerificationScreen;
