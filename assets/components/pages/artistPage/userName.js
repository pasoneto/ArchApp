import React, {FC, ReactElement, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Parse from 'parse/react-native';
import styles from './styles';

export const UserName = () => {
  // State variable that will hold username value
  const [username, setUsername] = useState('');

  // useEffect is called after the component is initially rendered and
  // after every other render
  useEffect(() => {
    // Since the async method Parse.User.currentAsync is needed to
    // retrieve the current user data, you need to declare an async
    // function here and call it afterwards
    async function getCurrentUser() {
      // This condition ensures that username is updated only if needed
      if (username === '') {
        const currentUser = await Parse.User.currentAsync();
        if (currentUser !== null) {
          setUsername(currentUser.getUsername());
        }
      }
    }
    getCurrentUser();
  }, [username]);

  // Note the condition operator here, so the "Hello" text is only
  // rendered if there is an username value
  return (
        <Text>{username}</Text>
  );
};
export default UserName;