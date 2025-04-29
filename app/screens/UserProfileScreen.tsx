import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const UserProfileScreen = () => {
  const navigation = useNavigation();
  const defaultImage = require("../../assets/images/profile.png");
  const [profileImage, setProfileImage] = useState<any>(defaultImage);

  const handleBack = () => {
    navigation.goBack();
  };

  // ⬇️ Options when pencil is pressed
  const openImageOptions = () => {
    Alert.alert("Profile Picture", "What would you like to do?", [
      {
        text: "Remove Picture",
        onPress: () => setProfileImage(defaultImage),
      },
      {
        text: "Add New Picture",
        onPress: () => handlePickImage(), // ⬅️ Works for both new/edit
      },
      {
        text: "Edit Picture",
        onPress: () => handlePickImage(),
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };

  // ⬇️ Image Picker Logic
  const handlePickImage = async () => {
    const permissionResult =
      Platform.OS !== "web"
        ? await ImagePicker.requestMediaLibraryPermissionsAsync()
        : { granted: true };

    if (!permissionResult.granted) {
      Alert.alert("Permission Denied", "Access to media library is required.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setProfileImage({ uri: result.assets[0].uri });
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="arrow-left" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>User Profile</Text>
      </View>

      {/* Profile Picture + Edit Icon */}
      <View style={styles.imageContainer}>
        <Image source={profileImage} style={styles.avatar} />
        <TouchableOpacity style={styles.editIcon} onPress={openImageOptions}>
          <Icon name="pencil" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* User Details */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Full Name</Text>
        <Text style={styles.value}>Dinusha Anupama</Text>

        <Text style={styles.label}>Email Address</Text>
        <Text style={styles.value}>danupama104@gmail.com</Text>

        <Text style={styles.label}>Student ID</Text>
        <Text style={styles.value}>2025938</Text>
      </View>
    </View>
  );
};

export default UserProfileScreen;

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
  imageContainer: {
    alignSelf: "center",
    marginTop: 30,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 6,
    elevation: 4,
  },
  infoContainer: {
    marginTop: 40,
    paddingHorizontal: 30,
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
});
