import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

function Details({navigation}){
    const data = navigation.getParam('dataPosition');

    return (
        <View style={styles.container}>
            <View style={styles.boxDetails}>
                <View style={styles.c1}>
                    <Text style={styles.name}>{data.name}, {data.country}</Text>
                    <Text style={styles.description}>{data.description}</Text>
                </View>

                <View style={styles.c2}>
                    <Text style={styles.temperature}>{data.temperature}°C</Text>
                    <View style={styles.subDetails}>
                        <Text style={styles.subDetailsText}>Umidade: {data.humidity}%</Text>
                        <Text style={styles.subDetailsText}>Vento: {data.windSpeed} Km/h</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Details;