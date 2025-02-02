import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
    Alert,
} from "react-native";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert("Error", "Please enter both email and password.");
            return;
        }
        if (email !== "paredesaxel1619@gmail.com" && password !== "123456") {
            Alert.alert("Error", "User not found.");
            return;
        }
        // Handle login logic here
        navigation.navigate("MainProfile");
        Alert.alert("Success", `Welcome, ${email}!`);
    };
    const handleSignUp = () => {
        navigation.navigate("SignUp");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("../../assets/programmer.png")}
                    style={styles.backgroundImage}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.loginCard}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    placeholder="example@email.com"
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={handleSignUp}
                >
                    <Text style={styles.signUpText}>
                        New User? Register Now
                    </Text>
                </TouchableOpacity>
                <View style={styles.loginCardFooter}></View>
            </View>
        </View>
    );
};

export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        paddingVertical: 10,
        paddingTop: "20%",
    },
    header: {
        alignItems: "center",
        marginBottom: 10,
    },
    backgroundImage: {
        width: 200,
        height: 250,
    },
    loginCard: {
        width: "90%",
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        position: "relative",
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 15,
        color: "#333",
    },
    input: {
        fontSize: 20,
        height: 50,
        borderColor: "#d88720",
        borderBottomWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 25,
    },
    loginButton: {
        backgroundColor: "#d88720",
        marginTop: 25,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    signUpButton: {
        marginTop: 15,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    signUpText: {
        color: "#d88720",
        fontSize: 16,
        fontWeight: "bold",
    },
    loginCardFooter: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 20,
    },
});
