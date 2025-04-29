import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require("../../assets/images/profile.png")}
          style={styles.avatar}
        />
        <Text style={styles.name}>Dinusha Anupama</Text>
      </View>

      {/* Menu Section */}
      <View style={styles.menuSection}>
        <DrawerItem label="Home" onPress={() => props.navigation.navigate("Home")} />
        <DrawerItem label="Courses" onPress={() => {}} />
        <DrawerItem label="Projects" onPress={() => {}} />
        <DrawerItem label="Settings" onPress={() => props.navigation.navigate("Settings")} />
      </View>

      {/* Bottom Social & Version Section */}
      <View style={styles.footerSection}>
        <View style={styles.footerIcons}>
          <Image
            source={require("../../assets/images/logo-1.png")}
            style={styles.footerLogo}
          />
          <View style={styles.socialIcons}>
            <Image source={require("../../assets/images/web.png")} style={styles.icon} />
            <Image source={require("../../assets/images/whatsapp.png")} style={styles.icon} />
            <Image source={require("../../assets/images/telegram.png")} style={styles.icon} />
            <Image source={require("../../assets/images/facebook.png")} style={styles.icon} />
          </View>
        </View>
        <Text style={styles.version}>Version 1.0</Text>
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerItem = ({ label, onPress }: { label: string; onPress?: () => void }) => (
  <TouchableOpacity onPress={onPress} style={styles.drawerItem}>
    <Text style={styles.drawerText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  profileSection: {
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  menuSection: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  drawerItem: {
    marginBottom: 25,
  },
  drawerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  footerSection: {
    marginTop: "auto",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  footerIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  footerLogo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 15,
  },
  socialIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  version: {
    textAlign: "right",
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
});

export default CustomDrawerContent;
