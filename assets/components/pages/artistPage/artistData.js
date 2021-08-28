import React, {FC, useEffect, ReactElement, useState} from 'react';
import Parse from 'parse/react-native';
import { TextInput, Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export const ArtistData = () => {

    const [name, setName] = useState('');
    const [genero, setGenero] = useState('');
    const [spotify, setSpotify] = useState('');
    const [site, setSite] = useState('');



    const doUserData = async function addPerson(name, genero, spotify, site) {

        const nameValue = name;
        const generoValue = genero;
        const spotifyValue = spotify;
        const siteValue = site;

        try {
            //create a new Parse Object instance
            const newPerson = new Parse.Object('UserData');
            //define the attributes you want for your Object
            newPerson.set('name', nameValue);
            newPerson.set('genero', generoValue);
            newPerson.set('spotify', spotifyValue);
            newPerson.set('site', siteValue);
            //save it on Back4App Data Store
            await newPerson.save();
            } catch (error) {
                console.log('Error saving new person: ', error);
            }
        }

  return (
    <View style={styles.artistdata}>
        <TextInput
            style={styles.TextInputArtist}
            placeholder="Nome"
            placeholderTextColor="#003f5c"
            onChangeText={(name) => setName(name)}
        />
 
        <TextInput
            style={styles.TextInputArtist}
            placeholder="Genero musical"
            placeholderTextColor="#003f5c"
            onChangeText={(genero) => setGenero(genero)}
        />

        <TextInput
            style={styles.TextInputArtist}
            placeholder="Link spotify"
            placeholderTextColor="#003f5c"
            onChangeText={(spotify) => setSpotify(spotify)}
        />

        <TextInput
            style={styles.TextInputArtist}
            placeholder="Site pessoal"
            placeholderTextColor="#003f5c"
            onChangeText={(site) => setSite(site)}
        />

        <TouchableOpacity 
            style={styles.savebutton}
            onPress={() => doUserData(name, genero)}>
            <Text style={styles.subtitle}>Salvar</Text>
        </TouchableOpacity>


    </View>
  );
};
export default ArtistData;