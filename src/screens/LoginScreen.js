import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function LoginScreen() {
    <View style={styles.container}>
        <Image source={require('../imagens/logotipo.png')} style={styles.image} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#14C871',
        alignItems: 'center',
        justifyContent: 'center',
    },
});