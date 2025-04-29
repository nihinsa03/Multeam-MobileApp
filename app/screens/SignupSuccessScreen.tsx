import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  SignupSuccess: undefined;
  Login: undefined;
};

type SignupSuccessScreenNavigationProp = StackNavigationProp<RootStackParamList, "SignupSuccess">;

const SignupSuccessScreen = () => {
  const navigation = useNavigation<SignupSuccessScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your account create successfully !!</Text>
      <Text style={styles.subHeader}>
        Wait for Admin confirmation. Check your email every time.
      </Text>
      <Text style={styles.infoText}>IF Urgent? Contact system admin.</Text>

      {/* Go Back Button */}
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.reset({ index: 0, routes: [{ name: "Login" }] })}
      >
        <Text style={styles.goBackText}>Go Back</Text>
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
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#000",
  },
  subHeader: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  goBackButton: {
    width: "50%",
    height: 50,
    backgroundColor: "#1FAF38",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  goBackText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignupSuccessScreen;
