import React from 'react'
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ArtistList from './screenLists/artistList'
import LogIn from '../pages/login/loginPage'
import PartituraList from './screenLists/partituraList'
import registerPage from '../pages/login/registerPage'

const Stack = createStackNavigator();

const OverallRoute = (props) =>{
    return(
    <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Home" component={ArtistList}  options={{ headerShown: false }} />
         <Stack.Screen name="Login" component={LogIn} options={{headerShown: false}} />
         <Stack.Screen name="Register" component={registerPage} options={{headerShown: false}} />
         <Stack.Screen name="Partituras" component={PartituraList} />
       </Stack.Navigator>
    </NavigationContainer>
    )
};

export default OverallRoute;

