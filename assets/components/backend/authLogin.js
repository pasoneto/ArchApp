// In a React Native application
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import React, { useState } from 'react';

//Initializing the SDK
Parse.setAsyncStorage(AsyncStorage);

const app_id = "xfI2kJUKKpBFNKe42r7bpxgplsW3AFp8A4GYaLrA"
const js_key = "MVqChwUveznUPhmL2Fvi4MyzPL2wwhlnGwS9hQyN"

//Paste below the Back4App Application ID AND the JavaScript KEY
Parse.initialize(app_id, js_key);
//Point to Back4App Parse API address 
Parse.serverURL = 'https://parseapi.back4app.com/';

const doUserLogIn = async function (user, password) {
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
      return true;
    })
    .catch((error) => {
      // Error can be caused by wrong parameters or lack of Internet connection
      Alert.alert('Error!', error.message);
      return false;
    });
};


export default doUserLogIn;