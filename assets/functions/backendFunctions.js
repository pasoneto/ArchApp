import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';
///////////Initializing the SDK
Parse.setAsyncStorage(AsyncStorage);

const app_id = "xfI2kJUKKpBFNKe42r7bpxgplsW3AFp8A4GYaLrA"
const js_key = "MVqChwUveznUPhmL2Fvi4MyzPL2wwhlnGwS9hQyN"

//Paste below the Back4App Application ID AND the JavaScript KEY
Parse.initialize(app_id, js_key);
//Point to Back4App Parse API address 
Parse.serverURL = 'https://parseapi.back4app.com/';

//////////End of Initializing the SDK

/////////Function performs user auth
export const doUserLogIn = async function (user, password, navigation) {
	// Note that these values come from state variables that we've declared before
	const usernameValue = user;
	const passwordValue = password;

	return await Parse.User.logIn(usernameValue, passwordValue)
		.then(async (loggedInUser) => {
		// logIn returns the corresponding ParseUser object
		Alert.alert(
			'Bem-vindo,',
			`${loggedInUser.get('username')}!`,
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
/////////End of Function performing user auth

/////////Begin read user data
export const readData = async function (readResults, setReadResults) {
        const parseQuery = new Parse.Query("UserScores");
        try {
          let todos = await parseQuery.find();
          setReadResults(todos);
          return true;
        } catch (error) {
          Alert.alert('Error!', error.message);
          return false;
        }

};
/////////End read user data
