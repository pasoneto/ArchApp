import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from '../../pages/mainScreen/styles';
import lista_info from '../../../data/lista_info'
import FrontPage from '../../pages/mainScreen/mainScreen'

const ArtistList = (props) => {

    return(
        <View style={styles.page}>
            <FlatList
                data={lista_info}
                renderItem={({item}) => <FrontPage artist={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('screen').height}
            />
        </View>
    );
}
 
export default ArtistList;