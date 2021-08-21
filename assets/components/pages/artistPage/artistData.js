import React, {FC, ReactElement, useState} from 'react';
import { TextInput, Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export const ArtistData = () => {

    const [name, setName] = useState('');
    const [genero, setGenero] = useState('');
    const [spotify, setSpotify] = useState('');

  return (
      <View style={styles.artistdata}>
        <TextInput
            style={styles.TextInput}
            placeholder="Nome"
            placeholderTextColor="#003f5c"
            onChangeText={(name) => setName(name)}
        />
 
        <TextInput
            style={styles.TextInput}
            placeholder="Genero musical"
            placeholderTextColor="#003f5c"
            onChangeText={(genero) => setGenero(password)}
        />

        <TextInput
            style={styles.TextInput}
            placeholder="Link spotify"
            placeholderTextColor="#003f5c"
            onChangeText={(spotify) => setSpotify(spotify)}
        />

        <TextInput
            style={styles.TextInput}
            placeholder="Site pessoal"
            placeholderTextColor="#003f5c"
            onChangeText={(site) => setSite(site)}
        />

	    <TouchableOpacity 
            style={styles.savebutton}
            onPress={() => console.warn("Esqueceu pae")}>
           <Text style={styles.subtitle}>Salvar</Text>
        </TouchableOpacity>

    </View>
  );
};
export default ArtistData;