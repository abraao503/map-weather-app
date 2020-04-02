import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    callout: {
        width: 200,
        flex: 1,
        position: 'relative'
    },

    name: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },

    description: {
        color: '#666',
        textAlign: 'center'
    },

    temp: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        color: '#444'
    },  
    
    map: {
        flex: 1
    }
});