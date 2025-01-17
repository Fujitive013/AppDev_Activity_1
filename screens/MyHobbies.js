import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React from "react";

const MyHobbies = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.projectContainer}>
                <TouchableOpacity style={styles.card}>
                    <Image
                        source={require("../assets/projects/map-app/adaptive-icon.png")}
                        style={styles.image}
                    />
                    <Text style={styles.projectTitle}>ExploreLDCU!</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.projectContainer}>
                <TouchableOpacity style={styles.card}>
                    <Image
                        source={require("../assets/projects/motodachi/text_logo_black.png")}
                        style={styles.image}
                    />
                    <Text style={styles.projectTitle}>Motodachi</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default MyHobbies;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    projectContainer: {
        marginBottom: 20,
    },
    card: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 10,
    },
    projectTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
});
