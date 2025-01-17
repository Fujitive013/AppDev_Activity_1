import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const MotoDachi = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.descriptionContainer}>
                <Image
                    source={require("../../assets/projects/motodachi/text_logo_black.png")}
                    style={styles.logo}
                />
                <Text style={styles.paragraph}>
                    MotoDachi is your go-to motorcycle ride-booking app in
                    Cagayan de Oro. With a focus on local transportation,
                    MotoDachi delivers a seamless, efficient, and user-friendly
                    experience that lets you book rides with ease.
                </Text>
            </View>
            <View style={styles.features}>
                <Text style={styles.sectionTitle}>Key Features:</Text>
                <View style={styles.feature}>
                    <Text style={styles.featureTitle}>
                        1. Google Maps Integration
                    </Text>
                    <Image
                        source={require("../../assets/projects/motodachi/gmaps_logo.png")}
                        style={styles.featureImageGmaps}
                    />
                    <Text style={styles.paragraph}>
                        MotoDachi integrates Google Maps to provide precise
                        navigation and real-time route visualization. Riders and
                        passengers can track their journey, ensuring
                        transparency and convenience from start to finish.
                    </Text>
                </View>
                <View style={styles.feature}>
                    <Text style={styles.featureTitle}>
                        2. Location Fetching
                    </Text>
                    <Image
                        source={require("../../assets/projects/motodachi/booking_page.jpg")}
                        style={styles.featureImage}
                    />
                    <Text style={styles.paragraph}>
                        Need a ride quickly? MotoDachi’s location-fetching
                        feature helps pinpoint your exact location with ease.
                        Whether you're at home, work, or exploring the city, the
                        app ensures you’re always connected to nearby riders.
                    </Text>
                </View>
                <View style={styles.feature}>
                    <Text style={styles.featureTitle}>
                        3. Book Riders Within CDO
                    </Text>
                    <Image
                        source={require("../../assets/projects/motodachi/dashboard_page.jpg")}
                        style={styles.featureImage}
                    />
                    <Text style={styles.paragraph}>
                        MotoDachi specializes in providing services exclusively
                        within Cagayan de Oro. Whether it’s a quick ride to
                        Divisoria or commuting to uptown areas, MotoDachi’s
                        fleet of riders has you covered.
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
    featureImageGmaps: {
        width: "100%",
        height: 100,
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

export default MotoDachi;
