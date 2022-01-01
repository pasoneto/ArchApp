import React, { useState } from 'react';
import ArrowUp from '../animations/arrow';
import SelectDropdown from 'react-native-select-dropdown'
import IconButton from './iconButton';
import styles from './styles'
import Parse from 'parse/react-native';

const StyledDropdown = ({object, onPress}) => {

    // End of save score info
    const [partFocus, setPartFocus] = useState('')

    const deleteTodo = async function (scoreId) {
        // Create a new todo parse object instance and set todo id
        const Todo = new Parse.Object('UserScores');
        console.log(scoreId)
        Todo.set('objectId', scoreId);
        // Implement refresh for list

        // .destroy should be called to delete a parse object
        try {
          await Todo.destroy();
          // Refresh todos list to remove this one
          // refresh
          return true;
        } catch (error) {
          // Error can be caused by lack of Internet connection
          console.log('Error!', error.message);
          return false;
        };
      };

  return (
    <SelectDropdown
        data={object}
        onSelect={(selectedItem, index) => {
            setPartFocus(selectedItem, index)
            console.log(partFocus)
            deleteTodo(partFocus.id)
            // add function to delete partitura
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
            return "Suas partituras"
        }}
        rowTextForSelection={(item) => {
            return <IconButton iconName={"trash-can"} size={20} text={item.get('name')} onPress={onPress}/>
        }}
        renderDropdownIcon={()=> (
            <ArrowUp iconName={"chevron-double-down"} sizeIcon={25}/>
        )}
        defaultButtonText = "Suas partituras"
        buttonStyle={styles.dropdownStyle}
        buttonTextStyle={styles.dropText}
    />


  );
};

export default StyledDropdown;





