import React from "react";
import { View, Text, StyleSheet } from "react-native";

function AppBar(){
    return(
        <View style={styles.appBar}>
            <Text style={styles.texto}>Eu Sei Onde Você Mora</Text>
        </View>
    );
}

export default AppBar;

const styles = StyleSheet.create({
    appBar:{
        height: '10%',
        backgroundColor: '#656AD3',
        paddingLeft: '10%',
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 10,
        width: '100%',
        // alignSelf: 'flex-start',
    },
    texto:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
})