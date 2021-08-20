import { Alert, StyleSheet, Dimensions, Text, View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import React, {FC, ReactElement, useEffect, useState} from 'react';
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogIn = (props) => {
    const image = require('../../../images/loginBG.jpg') 
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    //Initializing the SDK
    Parse.setAsyncStorage(AsyncStorage);

    const app_id = "xfI2kJUKKpBFNKe42r7bpxgplsW3AFp8A4GYaLrA"
    const js_key = "MVqChwUveznUPhmL2Fvi4MyzPL2wwhlnGwS9hQyN"

    //Paste below the Back4App Application ID AND the JavaScript KEY
    Parse.initialize(app_id, js_key);
    //Point to Back4App Parse API address 
    Parse.serverURL = 'https://parseapi.back4app.com/';

    const doUserLogIn = async function () {
     // Note that these values come from state variables that we've declared before
     const usernameValue = user;
     const passwordValue = password;
     return await Parse.User.logIn(usernameValue, passwordValue)
       .then(async (loggedInUser) => {
         // logIn returns the corresponding ParseUser object
         Alert.alert(
           'Success!',
           `User ${loggedInUser.get('username')} has successfully signed in!`,
         );
         // To verify that this is in fact the current user, currentAsync can be used
         const currentUser = await Parse.User.currentAsync();
         console.log(loggedInUser === currentUser);
         navigation.navigate("Welcome", {currentUser: currentUser});
         return true;
       })
       .catch((error) => {
         // Error can be caused by wrong parameters or lack of Internet connection
         Alert.alert('Error!', error.message);
         return false;
       });
   };

    return (

        <View style={styles.container}>
              
        <ImageBackground 
          source={image}
          style={styles.image}
        />

        <Text style={styles.title}>ArchVix</Text>
        <Text style={styles.subtitle}>O aplicativo da música capixaba</Text>

        <TextInput
            style={styles.TextInput}
            placeholder="Usuário"
            placeholderTextColor="#003f5c"
            autoCapitalize={"none"}
            onChangeText={(user) => setUser(user)}
        />
 
        <TextInput
            style={styles.TextInput}
            placeholder="Senha"
            placeholderTextColor="#003f5c"
            autoCapitalize={"none"}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
        />

      <TouchableOpacity 
        style={styles.forgot_button}
        onPress={() => console.warn("Esqueceu pae")}>
            <Text style={styles.subtitle}>Esqueceu a senha?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity 
        style={styles.loginBtn}
        onPress={() => doUserLogIn()}>
            <Text style={styles.logintext}>Entrar</Text>
      </TouchableOpacity>
      
    </View>

    );
}

export default LogIn;
