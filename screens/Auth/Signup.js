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
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigation = useNavigation();

    const handleSignUp = () => {
        if (!email || !password) {
            Alert.alert("Error", "Please enter both email and password.");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Error", "Password does not match.");
            return;
        }
        navigation.navigate("Login");
        Alert.alert("Success", `Welcome, ${email}! Please login.`);
    };

    const handleBack = () => {
        navigation.goBack();
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
            <View style={styles.signUpCard}>
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

                <Text style={styles.label}> Confirm Password</Text>
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={handleSignUp}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.signUpCardFooter}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={handleBack}
                    >
                        <Ionicons
                            name="arrow-back-outline"
                            size={20}
                            color="#333"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
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
    signUpCard: {
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
    signUpButton: {
        backgroundColor: "#d88720",
        marginTop: 25,
        marginBottom: 10,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    signUpCardFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    backButton: {
        backgroundColor: "#f0f0f0",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    backText: {
        color: "#007bff",
        fontSize: 12,
        fontWeight: "bold",
    },
});
