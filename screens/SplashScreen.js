import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function SplashScreen() {
    return (
    <View style={styles.container}>
        <Image source={require('../assets/logotipo.png')} style={styles.image} />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14C871',
    alignItems: 'center',
    justifyContent: 'center',
  },
});