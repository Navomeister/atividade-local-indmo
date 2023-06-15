import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function Mapa() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permissão foi negada pelo usuário.');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Esperando...';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
        return (
        <View style={styles.container}>
            {/* <Text>{text}</Text>  */}
            <MapView style={styles.mapa}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                >
                <Marker
                    coordinate={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                    }}
                    title='Você Está Aqui!'
                />
            </MapView>
        </View>
    );
    }

    
}

export default Mapa;

const styles = StyleSheet.create({
    mapa: {
        height: '100%',
        width: '100%',
        borderStyle: 'dashed',
        borderWidth: 5,
    },
    container: {
        flex: 1,
        // backgroundColor: '#faf',
        height: '25%',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})