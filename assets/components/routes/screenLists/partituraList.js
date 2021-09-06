import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from '../../pages/mainScreen/styles';
import artist_data from '../../../data/artist_data'
import Partituras from '../../pages/partituras/partituraScreen';
import {useNavigation} from '@react-navigation/native'

const PartituraList = (props) => {
    
    const name = props.route.params.name
    return(
        <View style={styles.page}>
            <FlatList
                data={artist_data}
                renderItem={({item}) => {if ( item.name.valueOf() == name.valueOf() ) {return <Partituras artist={item}/> }} }
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('screen').height}
            />
        </View>
    );
}

export default PartituraList;
