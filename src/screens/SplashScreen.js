import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { color } from '../theme/colors';
import { typography } from '../theme/typography';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../imagens/casual_dog.png')} style={styles.image} />
      <View style={styles.mainTexts}>
        <Text style={styles.title}>Ótimo dia!</Text>
        <Text style={styles.subtitle}>Como deseja acessar?</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonGoogle}>

        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMoreOptions}>
          
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
  },
});