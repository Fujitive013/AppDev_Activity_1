import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const LandingPage = () => {
    // Function to get the greeting message based on the current time
    const getGreeting = () => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            return { greeting: "Good Morning", icon: "partly-sunny-outline" };
        } else if (currentHour < 18) {
            return { greeting: "Good Afternoon", icon: "sunny" };
        } else {
            return { greeting: "Good Evening", icon: "moon-outline" };
        }
    };

    const navigation = useNavigation();
    const { greeting, icon } = getGreeting();

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                {/* Display the greeting icon */}
                <Ionicons
                    name={icon}
                    size={100}
                    color="#d88720"
                    marginBottom="20"
                />
                <Text style={styles.welcomeText}>
                    {/* Display the greeting message */}
                    {greeting}, Welcome to my Profile App!
                </Text>
                <TouchableOpacity
                    style={styles.continueBtn}
                    onPress={() => navigation.navigate("MainProfile")}
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
        padding: 20,
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
