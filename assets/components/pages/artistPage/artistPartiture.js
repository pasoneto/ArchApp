import React, {FC, useEffect, ReactElement, useState} from 'react';
import Parse from 'parse/react-native';
import { TextInput, Image, Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown'

export const ArtistPartitura = () => {

    const [name, setName] = useState('');
    const [genero, setGenero] = useState('');
    const [spotify, setSpotify] = useState('');
    const [site, setSite] = useState('');
    const partituras = ["Penedo", "Pedra Coração"]

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
        buttonTextStyle={styles.TextInputArtist}

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
            onChangeText={(genero) => setGenero(genero)}
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
            onPress={() => console.warn("Salvar dados")}>
            <Text style={styles.subtitle}>Salvar</Text>
        </TouchableOpacity>



  </View>
  );
};
export default ArtistPartitura;
