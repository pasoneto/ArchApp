// In a React Native application
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';

//Initializing the SDK
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
      //navigation.dispatch(StackActions.popToTop());
      return true;
    })
    .catch((error) => {
      // signUp can fail if any parameter is blank or failed an uniqueness check on the server
      Alert.alert('Error!', error.message);
      return false;
    });
};

export default doUserRegistration;
