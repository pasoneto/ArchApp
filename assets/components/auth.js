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

export const addPerson = async (user, password, password2) => {
    //create a new Parse Object instance
    const newPerson = new Parse.Object('Person');
    //define the attributes you want for your Object
    if (password.valueOf() == password2.valueOf()){
      newPerson.set('name', user);
      newPerson.set('password', password);
      //save it on Back4App Data Store
      await newPerson.save();
      Alert.alert("Cadastro feito com sucesso!") 
    } else {
      Alert.alert("As senhas não são iguais, seu merda")
  }
}

export default addPerson;
