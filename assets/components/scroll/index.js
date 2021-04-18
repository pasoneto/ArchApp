import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import styles from '../pages/styles';
import lista_info from '../data/lista_info'
import FrontPage from '../pages/'

const ArtistList = (props) => {

    return(
        <View style={styles.page}>
            <FlatList
                data={lista_info}
                renderItem={({item}) => <FrontPage artist={item} />}
                snapToAlignment={'start'}
                // showsVerticalScrollIndicator={'false'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('screen').height}
                // snapToStart={'true'}
            />
        </View>
    );
}
 
export default ArtistList;