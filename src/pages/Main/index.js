import React, { useState, useEffect, Component } from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

import api from '../../services/api';

import styles from './styles';

function Main({ navigation }){
    const key = '7bbd4f34369c343ba71a434eae903b15';

    const [region, setRegion] = useState({
        latitude: 12.758713, 
        longitude: -50.6550657,
        latitudeDelta: 35,
        longitudeDelta: 35
    });
    const [marker, setMaker] = useState({latitude: 0, longitude: 0})
    const [dataPosition, setDataPosition] = useState({});

    useEffect(()=>{
        getDataAPI()
    }, [marker])

    async function getDataAPI(){
        const {data} = await api.get(`./weather?lat=${marker.latitude}&lon=${marker.longitude}&appid=${key}&lang=pt_br`);
        console.log(data);
        const [{description}] = data.weather;
        const {main, name, sys, wind} = data;
        setDataPosition({
            country: sys.country,
            description,
            humidity: main.humidity,
            name,
            temperature: Math.round(main.temp - 273.15),
            windSpeed: Math.round(wind.speed * 3.6),
        });
    }

    function handleRegionChanged(region) {
        setRegion(region); 
    }

    return(
        <MapView 
            style={styles.map}
            region={region}
            onRegionChangeComplete={handleRegionChanged}
            onPress={(e) => setMaker({ 
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude
            })}
        >
        {
            marker &&
            <Marker coordinate={marker}>
                <Callout onPress={()=>{
                    navigation.navigate('Details', { dataPosition })
                }}>
                    <View style={styles.callout}>
                        <Text style={styles.name}>{dataPosition.name}</Text>
                        <Text style={styles.description}>{dataPosition.description}</Text>
                        <Text style={styles.temp}>{dataPosition.temperature}°</Text>
                    </View>
                </Callout>
            </Marker>
        }
        </MapView>
    )
}

export default Main;