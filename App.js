import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler'
import { StyleSheet, View } from 'react-native';
import ArtistList from './assets/components/scroll'
import LogIn from './assets/components/login'
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PartituraList from './assets/components/scroll/partitura_scroll';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>

    
    <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Home" component={ArtistList}  options={{ headerShown: false }} />
         <Stack.Screen name="Login" component={LogIn} options={{headerShown: false}} />
         <Stack.Screen name="Partituras" component={PartituraList} />
       </Stack.Navigator>
    </NavigationContainer>
    
    // <StatusBar style='auto'/>
    // </View>

    // <Rotas/>
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
