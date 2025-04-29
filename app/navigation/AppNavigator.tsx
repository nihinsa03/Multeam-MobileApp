import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import ForgotPasswordVerificationScreen from "../screens/ForgotPasswordVerificationScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import PasswordResetSuccessScreen from "../screens/PasswordResetSuccessScreen";
import SignupScreen from "../screens/SignupScreen";
import SignupSuccessScreen from "../screens/SignupSuccessScreen";
import PasswordSetupScreen from "../screens/PasswordSetupScreen";
import HomeScreen from "../screens/HomeScreen";
import DrawerNavigator from "./DrawerNavigator";
import SettingsScreen from "../screens/SettingsScreen";
import UserProfileScreen from "../screens/UserProfileScreen";





export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Signup: undefined;
  SignupSuccess: undefined;
  ForgotPassword: undefined;
  ForgotPasswordVerification: undefined;
  ResetPassword: undefined;
  PasswordResetSuccess: undefined;
  PasswordSetup:undefined;
  Home:undefined;
  CustomDrawer:undefined;
  MainApp:undefined;
  Settings:undefined;
  UserProfile:undefined;

};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="SignupSuccess" component={SignupSuccessScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ForgotPasswordVerification" component={ForgotPasswordVerificationScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="PasswordResetSuccess" component={PasswordResetSuccessScreen} /> 
      <Stack.Screen name="PasswordSetup" component={PasswordSetupScreen} /> 
      <Stack.Screen name="MainApp" component={DrawerNavigator} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />

    
    
    </Stack.Navigator>
  );
}