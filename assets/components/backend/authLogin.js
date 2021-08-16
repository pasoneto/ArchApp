// In a React Native application
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';

//Initializing the SDK
Parse.setAsyncStorage(AsyncStorage);

const app_id = "xfI2kJUKKpBFNKe42r7bpxgplsW3AFp8A4GYaLrA"
const js_key = "MVqChwUveznUPhmL2Fvi4MyzPL2wwhlnGwS9hQyN"

//Paste below the Back4App Application ID AND the JavaScript KEY
Parse.initialize(app_id, js_key);
//Point to Back4App Parse API address 
Parse.serverURL = 'https://parseapi.back4app.com/';

//This function will retrieve a Person which the name is John
export const authLogin = async (user, password) => {

//Este codigo lê os dados do banco de dados. Agora eu preciso verificar se o email/senha dele sao iguais ao que ele passa no app 

      //create your Parse Query using the Person Class you've created
      let query = new Parse.Query('Person');
      //run the query to retrieve all objects on Person class, optionally you can add your filters
      let queryResult = await query.findAll();
      //pick the first result 
      const currentPerson = queryResult[1];
      //access the Parse Object attributes
      console.log('user: ', currentPerson.get('user'));
      console.log('password: ', currentPerson.get('password'));
  }
  export default authLogin;
