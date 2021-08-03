import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, Button,ScrollView,StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';
import { HomeScreen } from './page/HomeScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PasswordScreen } from './page/PasswordScreen';



  const launchCommand = (command)=>{
    switch (command) {
      case "key" : break;
      case "voice" : break;
      case "add" : break;
    }
  };
export default function App() {

  const Stack = createStackNavigator();


  return (
    <NavigationContainer>      
      <Header title="Password Keeper by AlbertoZ"></Header>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }}/>
        <Stack.Screen name="Password" component={PasswordScreen} options={{ title: 'Visualizza' }}/>
      </Stack.Navigator>
      
      <StatusBar style="auto"></StatusBar>
    </NavigationContainer>
    

  );
}
