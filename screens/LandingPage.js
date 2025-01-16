import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const LandingPage = () => {
    const getGreeting = () => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            return "Good Morning";
        } else if (currentHour < 18) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
    };

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.welcomeText}>
                    {getGreeting()}, Welcome to my Profile App!
                </Text>
                <TouchableOpacity
                    style={styles.continueBtn}
                    onPress={() => navigation.navigate("MainProfile")} // Wrap in an arrow function
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LandingPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    textContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    welcomeText: {
        fontSize: 24,
        color: "#000",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    continueBtn: {
        backgroundColor: "#d88720",
        marginTop: 15,
        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
});
