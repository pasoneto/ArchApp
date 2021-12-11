import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        // padding: 5,
    },
    button: {
        opacity: 0.95,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 20,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
    },
    text: {
        fontSize: 17,
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    button_data: {
        padding: 18,
        width: '46%',
        height: 60,
        color: "#3b3a30",
        borderWidth: 5,
        borderColor: "#3b3a30",
        borderBottomColor: "#3b3a30",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "100%"
  },
});

export default styles;
