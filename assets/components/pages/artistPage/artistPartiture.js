import React, {FC, useEffect, ReactElement, useState} from 'react';
import Parse from 'parse/react-native';
import { TextInput, Image, Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown'
import ArrowUp from '../../animations/arrow';

export const ArtistPartitura = () => {

    const [name, setName] = useState('');
    const [composer, setComposer] = useState('');
    const [spotify, setSpotify] = useState('');

    // Beginning of read user data
    const [username, setUsername] = useState('');
    const [readResults, setReadResults] = useState([]);

    const readData = async function () {
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

    //Getting username
    useEffect(() => {
            async function getCurrentUser() {
            if (username === '') {
                const currentUser = await Parse.User.currentAsync();
                if (currentUser !== null) {
                    setUsername(currentUser.getUsername());
                    readData();
                }
            }
            }
            getCurrentUser();
    }, [username]);

    if(readResults !== []){
        var a = readResults.filter((i)=>i.get('username') === username)
        var partituras = a.map((i)=>i.get('name'))
    }

// Save score info
    const doUserData = async function addPerson(name, composer, spotify, username) {

        const nameValue = name;
        const composerValue = composer;
        const spotifyValue = spotify;
        const usernameValue = username;

        if(nameValue && composerValue && spotifyValue && usernameValue !== ''){
            // Verificando se usuario já tem dados
            try {
                //create a new Parse Object instance
                const newPerson = new Parse.Object('UserScores');
                //define the attributes you want for your Object
                newPerson.set('name', nameValue);
                newPerson.set('composer', composerValue);
                newPerson.set('spotify', spotifyValue);
                newPerson.set('username', usernameValue);
                //save it on Back4App Data Store
                await newPerson.save();
                // atualizar();
                } catch (error) {
                    console.log('Error saving new person: ', error);
                }
            readData();
            } else {
        Alert.alert("Por favor, preencha todos os dados")
    };
    }
// End of save score info

  return (
      <View style={styles.artistdata}>

    <SelectDropdown
        data={partituras}
        onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
        }}
        rowTextForSelection={(item, index) => {
            return item
        }}
        defaultButtonText = "Suas partituras"
        buttonStyle={styles.dropdownStyle}
        buttonTextStyle={styles.dropText}
        renderDropdownIcon={()=> (
            <ArrowUp iconName={"chevron-double-down"} sizeIcon={25}/>
        )}
    />

      <Text>Adicione informações sobre a partitura.</Text>

        <TextInput
            style={styles.TextInputArtist}
            placeholder="Nome da música"
            placeholderTextColor="#fff"
            onChangeText={(name) => setName(name)}
        />
 
        <TextInput
            style={styles.TextInputArtist}
            placeholder="Compositor(a)"
            placeholderTextColor="#fff"
            onChangeText={(composer) => setComposer(composer)}
        />

        <TextInput
            style={styles.TextInputArtist}
            placeholder="Link spotify"
            placeholderTextColor="#fff"
            onChangeText={(spotify) => setSpotify(spotify)}
        />

        <TextInput
            style={styles.TextInputArtist}
            placeholder="Arquivo"
            placeholderTextColor="#fff"
            onChangeText={(site) => setSite(site)}
        />


        <TouchableOpacity 
            style={styles.savebutton}
            onPress={() => doUserData(name, composer, spotify, username)}>
            <Text style={styles.subtitle}>Salvar</Text>
        </TouchableOpacity>



  </View>
  );
};
export default ArtistPartitura;
