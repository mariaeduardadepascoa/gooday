import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import { useState } from 'react';
import { color } from '../theme/colors';
import { typography } from '../theme/typography';

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmada, setSenhaConfirmada] = useState('');
    const [senhaErrada, setSenhaErrada] = useState('');
    const [inputVazio, setInputVazio] = useState('');
    const [usuario, setUsuario] = useState('');
    const [novoUsuario, setNovoUsuario] = useState('');

    const users = [
        {
            "email": "le.leandrosil123@gmail.com",
            "senha": "123",
        },

        {
            "email": "melsph01@gmail.com",
            "senha": "456",
        },

        {
            "email": "lulubene.90@gmail.com",
            "senha": "789",
        },
    ]

    function verificarNovoUser(email, senha) {

        if (email === '' && senha === '') {
            console.log("inputs vazios");
            setInputVazio(true);
            return;
        }

        if (senha !== senhaConfirmada) {
            console.log("senha errada");
            setSenhaErrada(true);
            setSenha('');
            setSenhaConfirmada('');
            return;
        }

        const user = users.find(user => user.email === email && user.senha === senha);

        if (user) {
            console.log("Esse usuário já existe.");
            setUsuario(true);
            return;
        } else {
            const novoUser = {
                "email": email,
                "senha": senha,
            }
            users.push(novoUser);
            setNovoUsuario(true);
            console.log(users);
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.containerItems}>
                <View style={styles.mainTexts}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../imagens/icon-icons-green.png')} style={{ width: 40, height: 40 }} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Cadastro</Text>
                    <Text style={styles.subtitle}>Informe seu E-mail e crie uma conta</Text>
                </View>

                <View style={styles.mainContent}>
                    <View style={styles.inputsContainer}>
                        <Text style={styles.titleInput}>E-mail</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu E-mail"
                            value={email}
                            placeholderTextColor={color.ligthBluePlaceholders}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.inputsContainer}>
                        <Text style={styles.titleInput}>Crie uma senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua Senha"
                            value={senha}
                            placeholderTextColor={color.ligthBluePlaceholders}
                            onChangeText={setSenha}
                        />
                    </View>

                    <View style={styles.inputsContainer}>
                        <Text style={styles.titleInput}>Confirme sua senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua Senha"
                            value={senhaConfirmada}
                            placeholderTextColor={color.ligthBluePlaceholders}
                            onChangeText={setSenhaConfirmada}
                        />
                    </View>
                </View>

                <View style={styles.mainButton}>
                    <TouchableOpacity style={styles.accessButton} onPress={() => verificarNovoUser(email, senha)}>
                        <Text style={styles.titlesButton}>Acessar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.moreOptionsContainer}>
                    <View style={styles.row}></View>
                    <Text style={styles.titleInput}>Ou continue com</Text>
                    <View style={styles.row}></View>
                </View>

                <View style={styles.optionsContainer}>
                    <View style={styles.square}>
                        <Image source={require('../imagens/Google.png')} style={{ width: 40, height: 40 }} />
                    </View>
                    <View style={styles.square}>
                        <Image source={require('../imagens/Facebook.png')} style={{ width: 40, height: 40 }} />
                    </View>
                </View>

                {inputVazio && (
                    <View style={styles.popUp3}>
                        <Text style={styles.titlesButton}>Por favor, insira todos os dados.</Text>
                    </View>
                )}
                {usuario && (
                    <View style={styles.popUp2}>
                        <Text style={styles.titlesButton}>Esse usuário já existe.</Text>
                    </View>
                )}
                {senhaErrada && (
                    <View style={styles.popUp2}>
                        <Text style={styles.titlesButton}>As duas senhas devem ser iguais.</Text>
                    </View>
                )}
                {novoUsuario && (
                    <View style={styles.popUp}>
                        <Text style={styles.titlesButton}>Usuário criado com sucesso.</Text>
                    </View>
                )}
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
        position: 'relative',
        gap: 20,

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
        height: 60,
        backgroundColor: color.ligthBlue,
        borderRadius: 5,
        paddingLeft: 12,
        color: color.black,
    },
    mainContent: {
        gap: 20,
    },
    accessButton: {
        backgroundColor: color.greenPrimary,
        width: '100%',
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
        textAlign: 'center',
    },
    titlesButton2: {
        ...typography.body,
        color: color.black,
    },
    moreOptionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    row: {
        width: 75,
        height: 1,
        backgroundColor: color.gray,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    square: {
        backgroundColor: color.ligthGray,
        padding: 10,
        borderRadius: 10,
    },
    popUp: {
        backgroundColor: color.greenPrimary,
        padding: 10,
        borderRadius: 10,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        top: 50,
    },
    popUp2: {
        backgroundColor: color.red,
        padding: 10,
        borderRadius: 10,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        top: 50,
    },
    popUp3: {
        backgroundColor: color.darkGray,
        padding: 10,
        borderRadius: 10,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        top: 50,
    },
});