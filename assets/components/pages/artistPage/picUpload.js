import React, { useState, useEffect } from 'react';
import { Button, Text, TouchableOpacity, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

export const ImageChoose = () => {
  const [image, setImage] = useState(null);

  async function upload() {

	const {base64, fileName} = image;
	const  parseFile = new  Parse.File(fileName, {base64});
	try {
	   const responseFile = await  parseFile.save();
	   const Gallery = Parse.Object.extend('Gallery');
	   const gallery = new  Gallery();
	   gallery.set('picture', responseFile);
   
	   await gallery.save();
	   Alert.alert('The file has been saved to Back4app.');
	} catch (error) {
		console.log(
		  'The file either could not be read, or could not be saved to Back4app.',
		);
	   }
   }

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View>
      <TouchableOpacity 
        style={styles.TextInputArtist}
        onPress={pickImage}>
        <Text style={styles.TextImage}>Escolher foto</Text>
      </TouchableOpacity>
	{/* If i want to display image somewhere, below is how to do it */}
     {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
    </View>
  );
}
export default ImageChoose