import { Alert, StyleSheet, Dimensions, Text, View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import React, {FC, ReactElement, useEffect, useState} from 'react';
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function registerPage(props) {

    const image = require('../../../images/loginBG.jpg') 
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    Parse.setAsyncStorage(AsyncStorage);

    const app_id = "xfI2kJUKKpBFNKe42r7bpxgplsW3AFp8A4GYaLrA"
    const js_key = "MVqChwUveznUPhmL2Fvi4MyzPL2wwhlnGwS9hQyN"

    //Paste below the Back4App Application ID AND the JavaScript KEY
    Parse.initialize(app_id, js_key);
    //Point to Back4App Parse API address 
    Parse.serverURL = 'https://parseapi.back4app.com/';

    const doUserRegistration = async function (user, password, email) {
      // Note that these values come from state variables that we've declared before
      const usernameValue = user;
      const passwordValue = password;
      const emailValue = email;
      // Since the signUp method returns a Promise, we need to call it using await
      // Note that now you are setting the user email value as well
      return await Parse.User.signUp(usernameValue, passwordValue, {
        email: emailValue,
      })
        .then(async (createdUser) => {
          // Parse.User.signUp returns the already created ParseUser object if successful
          Alert.alert(
            'Success!',
            `User ${createdUser.get(
              'username',
            )} was successfully created! Verify your email to login`,
          );
          // Since email verification is now required, make sure to log out
          // the new user, so any Session created is cleared and the user can
          // safely log in again after verifying
          await Parse.User.logOut();
          // Go back to the login page
          navigation.navigate("Login");
          //navigation.dispatch(StackActions.popToTop());
          return true;
        })
        .catch((error) => {
          // signUp can fail if any parameter is blank or failed an uniqueness check on the server
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
            autoCapitalize={"none"}
            placeholderTextColor="#003f5c"
            onChangeText={(user) => setUser(user)}
        />
 
        <TextInput
            style={styles.TextInput}
            placeholder="Senha"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            autoCapitalize={"none"}
            onChangeText={(password) => setPassword(password)}
        />

        <TextInput
            style={styles.TextInput}
            placeholder="E-mail"
            placeholderTextColor="#003f5c"
            autoCapitalize={"none"}
            onChangeText={(email) => setEmail(email)}
        />
        
      <TouchableOpacity 
        style={styles.loginBtn}
        onPress={() => doUserRegistration(user, password, email)}>
            <Text style={styles.logintext}>Registrar</Text>
      </TouchableOpacity>
      
    </View>

    );
}

export default registerPage;
