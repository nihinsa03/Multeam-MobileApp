import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// Define your stack param list
type RootStackParamList = {
  Login: undefined;
  UserProfile: undefined;
};

const SettingsScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleUserProfile = () => {
    navigation.navigate("UserProfile");
  };

  const handleLogout = () => {
    // Optional: Add real logout logic here
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="arrow-left" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* User Profile */}
      <TouchableOpacity style={styles.item} onPress={handleUserProfile}>
        <Icon name="user-circle" size={30} color="#1A4D1A" style={styles.icon} />
        <View>
          <Text style={styles.itemTitle}>User Profile</Text>
          <Text style={styles.itemSubtitle}>Change profile img, name or user data</Text>
        </View>
      </TouchableOpacity>

      {/* Log Out */}
      <TouchableOpacity style={styles.item} onPress={handleLogout}>
        <Icon name="sign-out" size={28} color="#1A4D1A" style={styles.icon} />
        <Text style={styles.itemTitle}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#1A4D1A",
    paddingVertical: 40,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  icon: {
    marginRight: 20,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  itemSubtitle: {
    fontSize: 14,
    color: "#444",
    marginTop: 2,
  },
});
