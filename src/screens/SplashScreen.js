import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { color } from '../theme/colors';
import { typography } from '../theme/typography';

export default function SplashScreen({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('AcessOptions');
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../imagens/logotipo.png')} style={{ width: 250, height: 100 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.greenPrimary,
        alignItems: 'center',
        justifyContent: 'center',
    },
});