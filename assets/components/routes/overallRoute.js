import React from 'react'
import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ArtistList from './screenLists/artistList'
import LogIn from '../pages/login/loginPage'
import PartituraList from './screenLists/partituraList'
import registerPage from '../pages/login/registerPage'
import WelcomePage from '../pages/artistPage/welcomePage';
import resetPassword from '../pages/login/resetPassword';

const Stack = createStackNavigator();

const OverallRoute = (props) =>{

    return(
    <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Home" component={ArtistList}  options={{ headerShown: false }} />
         <Stack.Screen name="Login" component={LogIn} options={{headerShown: true}} />
         <Stack.Screen name="Register" component={registerPage} options={{headerShown: true}} />
         <Stack.Screen name="Welcome" component={WelcomePage} options={{headerShown: false}}/>
         <Stack.Screen name="Reset" component={resetPassword} options={{headerShown: true}}/>
         <Stack.Screen name="Partituras" component={PartituraList} />
       </Stack.Navigator>
    </NavigationContainer>
    )
};

export default OverallRoute;

