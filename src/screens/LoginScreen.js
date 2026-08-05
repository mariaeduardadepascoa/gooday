import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { color } from '../theme/colors';
import { typography } from '../theme/typography';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerItems}>
                <View style={styles.mainTexts}>
                    <Text style={styles.title}>Acesse</Text>
                    <Text style={styles.subtitle}>com E-mail e Senha</Text>
                </View>

                <View style={styles.mainContent}>
                    <View style={styles.inputsContainer}>
                        <Text style={styles.titleInput}>E-mail</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu E-mail"
                            placeholderTextColor={color.ligthBluePlaceholders}
                        />
                    </View>

                    <View style={styles.inputsContainer}>
                        <Text style={styles.titleInput}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua Senha"
                            placeholderTextColor={color.ligthBluePlaceholders}
                        />
                    </View>
                </View>

                <View style={styles.passwordContainer}>
                    <View style={styles.rememerberPasswordContainer}>
                        <View style={styles.boxRememberPassword}></View>
                        <Text style={styles.titleInput}>Lembrar senha</Text>
                    </View>
                    <Text style={styles.titleInput}>Esqueci minha senha</Text>
                </View>
                <View style={styles.mainButtons}>
                    <TouchableOpacity style={styles.accessButton}>
                        <Text style={styles.titlesButton}>Acessar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.createAccountButton}>
                        <Text style={styles.titlesButton2}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

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
    },
    containerItems: {
        flex: 2,
        width: '90%',
        backgroundColor: color.white,
        justifyContent: 'center',
        gap: 30,

    },
    title: {
        ...typography.title,
        color: color.darkGray,
    },
    subtitle: {
        ...typography.body,
        color: color.darkGray,
    },
    titleInput: {
        ...typography.body,
        color: color.black,
    },
    input: {
        width: '100%',
        ...typography.subtitle,
        height: 65,
        backgroundColor: color.ligthBlue,
        borderRadius: 5,
        paddingLeft: 12,
        color: color.black,
    },
    mainContent: {
        gap: 20,
    },
    passwordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rememerberPasswordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    boxRememberPassword: {
        width: 25,
        height: 25,
        borderColor: color.greenPrimary,
        borderRadius: 5,
        borderWidth: 2,
    },
    mainButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    accessButton: {
        backgroundColor: color.greenPrimary,
        width: '48%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
    createAccountButton: {
        borderColor: color.greenPrimary,
        borderWidth: 2,
        width: '48%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
    titlesButton: {
        ...typography.body,
        color: color.white,
    },
    titlesButton2: {
        ...typography.body,
        color: color.black,
    },
});