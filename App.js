import React from 'react';
import 'react-native-gesture-handler'
import { StyleSheet } from 'react-native';
import OverallRoute from './assets/components/routes/overallRoute';

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
