import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const ExploreLDCU = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.descriptionContainer}>
                <Image
                    source={require("../../assets/projects/map-app/adaptive-icon.png")}
                    style={styles.logo}
                />
                <Text style={styles.paragraph}>
                    ExploreLDCU is here to help you discover everything our
                    campus has to offer. Think of it as your digital campus map,
                    but better—a combination of navigation, resources, and
                    insider tips to make your time at LDCU truly memorable.
                </Text>
            </View>
            <View style={styles.features}>
                <Text style={styles.sectionTitle}>Key Features:</Text>
                <View style={styles.feature}>
                    <Text style={styles.featureTitle}>
                        1. Interactive Campus Map
                    </Text>
                    <Image
                        source={require("../../assets/projects/map-app/map.png")}
                        style={styles.featureImage}
                    />
                    <Text style={styles.paragraph}>
                        Gone are the days of wandering around trying to find
                        your next class or the nearest restroom. ExploreLDCU’s
                        interactive map provides:
                    </Text>
                    <Text style={styles.listItem}>
                        • Building locations with floor plans.
                    </Text>
                    <Text style={styles.listItem}>
                        • Directions to classrooms, administrative offices, and
                        recreational areas.
                    </Text>
                    <Text style={styles.listItem}>
                        • Markers for amenities like cafeterias, clinics, and
                        libraries.
                    </Text>
                </View>
                <View style={styles.feature}>
                    <Text style={styles.featureTitle}>2. Event Updates</Text>
                    <Image
                        source={require("../../assets/projects/map-app/calendar_screen.jpg")}
                        style={styles.featureImage}
                    />
                    <Text style={styles.paragraph}>
                        ExploreLDCU keeps you informed about:
                    </Text>
                    <Text style={styles.listItem}>• Academic schedules.</Text>
                    <Text style={styles.listItem}>
                        • Cultural events and seminars.
                    </Text>
                    <Text style={styles.listItem}>
                        • Sports tournaments and organization fairs.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        padding: 10,
    },
    header: {
        alignItems: "center",
        marginVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
    },
    descriptionContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
        paddingHorizontal: 10,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        marginRight: 15,
    },
    paragraph: {
        flex: 1,
        fontSize: 16,
        lineHeight: 22,
        color: "#555",
    },
    features: {
        marginVertical: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        color: "#222",
    },
    feature: {
        marginBottom: 20,
    },
    featureImage: {
        width: "100%",
        height: 600,
        resizeMode: "contain",
        marginBottom: 10,
    },
    featureTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#333",
    },
    listItem: {
        fontSize: 16,
        lineHeight: 22,
        marginLeft: 20,
        color: "#555",
    },
});

export default ExploreLDCU;
