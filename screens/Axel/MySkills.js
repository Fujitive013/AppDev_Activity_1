import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React from "react";

const MySkills = () => {
    return (
        // Display the skills in a ScrollView for vertical scrolling
        <ScrollView contentContainerStyle={styles.container}>
            {/* Display each skill on a card */}
            <View style={styles.skillContainer}>
                <Image
                    source={require("../../assets/skills/react_native.png")}
                    style={styles.skillImage}
                />
                <Text style={styles.skillTitle}>React Native</Text>
                <Text style={styles.skillDescription}>
                    I have experience building mobile applications with React
                    Native, leveraging its components to create efficient,
                    cross-platform solutions with a seamless user interface.
                </Text>
            </View>
            <View style={styles.skillContainer}>
                <Image
                    source={require("../../assets/skills/expressJS.jpg")}
                    style={styles.skillImage}
                />
                <Text style={styles.skillTitle}>ExpressJS</Text>
                <Text style={styles.skillDescription}>
                    I use ExpressJS to build robust and efficient backend
                    systems, creating APIs and managing server-side logic for
                    seamless communication between front-end and back-end
                    systems.
                </Text>
            </View>
            <View style={styles.skillContainer}>
                <Image
                    source={require("../../assets/skills/app_prototype.png")}
                    style={styles.skillImage}
                />
                <Text style={styles.skillTitle}>App Prototyping</Text>
                <Text style={styles.skillDescription}>
                    I have experience creating interactive prototypes to refine
                    user experience and validate app features effectively.
                </Text>
            </View>
        </ScrollView>
    );
};

export default MySkills;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    skillContainer: {
        marginBottom: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    skillImage: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
        resizeMode: "cover",
    },
    skillTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    skillDescription: {
        fontSize: 16,
        color: "#555",
        marginTop: 5,
    },
});
