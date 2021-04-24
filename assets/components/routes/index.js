import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation';
import ArtistList from '../../components/scroll'
import LogIn from '../../components/login'


const Screens = {
    Home: {
        screen: ArtistList
    },
    Login: {
        screen: LogIn
    },

}

const Stack = createStackNavigator(Screens);

export default createAppContainer(Stack);

