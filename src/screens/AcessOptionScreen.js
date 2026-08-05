import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { color } from '../theme/colors';
import { typography } from '../theme/typography';

export default function AcessOptionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../imagens/casual_dog.png')} style={styles.image} />
      <View style={styles.mainTexts}>
        <Text style={styles.title}>Ótimo dia!</Text>
        <Text style={styles.subtitle}>Como deseja acessar?</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonGoogle} onPress={() => navigation.navigate('Login')}>
          <View style={styles.miniBoxButton}><Image source={require('../imagens/Google.png')} style={styles.googleIcon} /></View>
          <Text style={styles.titleButtonGoogle}>Como deseja acessar?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMoreOptions}>
          <Text style={styles.titleButtonMoreOptions}>Outras opções</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },
  image: {
    width: '90%',
    height: '33%',
  },
  mainTexts: {
    alignItems: 'center',
  },
  title: {
    ...typography.title,
    color: color.darkGray,
  },
  subtitle: {
    ...typography.subtitle,
    color: color.darkGray,
    textAlign: 'center',
  },
  buttons: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  buttonGoogle: {
    backgroundColor: color.greenPrimary,
    width: '100%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: 6,
  },
  buttonMoreOptions: {
    backgroundColor: color.white,
    borderColor: color.greenPrimary,
    borderWidth: 1.5,
    width: '100%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: 6,
  },
  titleButtonGoogle: {
    ...typography.body,
    color: color.white,
  },
  titleButtonMoreOptions: {
    ...typography.body,
    color: color.black,
  },
  miniBoxButton: {
    position: 'absolute',
    left: 12,
    backgroundColor: color.white,
    height: 32,
    width: 32,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleIcon: {
    width: 25,
    height: 25,
  },
});