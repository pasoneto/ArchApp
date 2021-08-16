import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import { StyleSheet } from 'react-native';
import OverallRoute from './assets/components/routes/overallRoute';
import { View, Text } from 'react-native';

export default function App() {

  return (
    <OverallRoute/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
