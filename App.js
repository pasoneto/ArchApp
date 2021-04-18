import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView} from 'react-native';
import ArtistList from './assets/components/scroll'
import LogIn from './assets/components/pages/login' 

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
    
    {/* <ArtistList style={styles.container}/> */}
    <LogIn/>
    
    <StatusBar style='auto'/>

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
