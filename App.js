import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Mapa from './components/mapa';
import {enableLatestRenderer} from 'react-native-maps';
import AppBar from './components/AppBar';

enableLatestRenderer();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppBar />
      <View style={styles.meio}>
        <Text style={styles.titulo}>Bem aqui ó</Text>
        <Mapa />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
  },
  meio: {
    height: '90%',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  titulo: {
    fontSize: 26,
    height: '10%',
    justifyContent: 'center',
    textAlignVertical: 'center'
  }
});
