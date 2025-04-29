import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigator from "../navigation/AppNavigator";

export default function App() {
  // const [initialRoute, setInitialRoute] = useState<"Onboarding" | "PinConfirmation">("Onboarding");

  // useEffect(() => {
  //   const checkUserStatus = async () => {
  //     const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
  //     setInitialRoute(isLoggedIn ? "PinConfirmation" : "Onboarding");
  //   };

  //   checkUserStatus();
  // }, []);
  return <AppNavigator />;
}
