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
            <View style={styles.hobbyContainer}>
                <Image
                    source={require("../assets/hobbies/reading.jpg")}
                    style={styles.hobbyImage}
                />
                <Text style={styles.hobbyTitle}>Reading</Text>
                <Text style={styles.hobbyDescription}>
                    I love reading books, especially fiction. It allows me to
                    dive into different worlds and improve my imagination.
                </Text>
            </View>
            <View style={styles.hobbyContainer}>
                <Image
                    source={require("../assets/hobbies/watching.jpg")}
                    style={styles.hobbyImage}
                />
                <Text style={styles.hobbyTitle}>Watching</Text>
                <Text style={styles.hobbyDescription}>
                    I enjoy watching diverse forms of media, from movies to
                    series, as it allows me to explore different genres,
                    cultures, and storytelling techniques. This hobby enriches
                    my creativity and offers a relaxing escape.
                </Text>
            </View>
            <View style={styles.hobbyContainer}>
                <Image
                    source={require("../assets/hobbies/gaming.jpg")}
                    style={styles.hobbyImage}
                />
                <Text style={styles.hobbyTitle}>Gaming</Text>
                <Text style={styles.hobbyDescription}>
                    Gaming is my way to relax and unwind. I enjoy playing
                    strategy and action games, which challenge my mind and
                    reflexes.
                </Text>
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
    hobbyContainer: {
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
    hobbyImage: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
        resizeMode: "cover",
    },
    hobbyTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    hobbyDescription: {
        fontSize: 16,
        color: "#555",
        marginTop: 5,
    },
});
