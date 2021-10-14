import React, {FC, useEffect, ReactElement, useState} from 'react';
import Parse from 'parse/react-native';
import { TextInput, Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export const ArtistPartitura = () => {

    const [name, setName] = useState('');
    const [genero, setGenero] = useState('');
    const [spotify, setSpotify] = useState('');

  return (
      <View style={styles.artistdata}>

        <TextInput
            style={styles.TextInputArtist}
            placeholder="Nome da música"
            placeholderTextColor="#004f5c"
            onChangeText={(name) => setName(name)}
        />
 
        <TextInput
            style={styles.TextInputArtist}
            placeholder="Compositor(a)"
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
            placeholder="Arquivo"
            placeholderTextColor="#003f5c"
            onChangeText={(site) => setSite(site)}
        />


        <TouchableOpacity 
            style={styles.savebutton}
            onPress={() => console.warn("Salvar dados")}>
            <Text style={styles.subtitle}>Salvar</Text>
        </TouchableOpacity>



  </View>
  );
};
export default ArtistPartitura;