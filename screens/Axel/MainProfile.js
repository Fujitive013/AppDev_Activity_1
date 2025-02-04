import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

const MainProfile = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <View style={styles.backgroundImageContainer}>
                <Image
                    source={require("../../assets/banner.jpg")}
                    style={styles.backgroundImage}
                />
            </View>
            <View style={styles.profileImageContainer}>
                <Image
                    source={require("../../assets/profile_pic.jpg")}
                    style={styles.profileImage}
                />
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Axel L. Paredes</Text>
            </View>
            <View style={styles.tagsContainer}>
                <Text style={styles.tags}>BSIT</Text>
                <Text style={styles.tags}>3rd Year</Text>
                <Text style={styles.tags}>Track 2</Text>
                <Text style={styles.tags}>UI Design</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.infoTitle}>About Me</Text>
                <View style={styles.aboutSection}>
                    <View style={styles.iconPlaceholder}>
                        <Ionicons
                            name="school-outline"
                            size={30}
                            color="#000"
                        />
                    </View>
                    <Text style={styles.aboutText}>
                        Studies Bachelor of Science in Information Technology at
                        USTP-CDO.
                    </Text>
                </View>
                <View style={styles.aboutSection}>
                    <View style={styles.iconPlaceholder}>
                        <Ionicons name="home-outline" size={30} color="#000" />
                    </View>
                    <Text style={styles.aboutText}>
                        Lives in Villanueva, Misamis Oriental, Philippines
                    </Text>
                </View>
                <View style={styles.aboutSection}>
                    <View style={styles.iconPlaceholder}>
                        <Ionicons
                            name="calendar-outline"
                            size={30}
                            color="#000"
                        />
                    </View>
                    <Text style={styles.aboutText}>April 5, 2004</Text>
                </View>
                <View style={styles.aboutSection}>
                    <View style={styles.iconPlaceholder}>
                        <Ionicons
                            name="heart-circle-outline"
                            size={30}
                            color="#000"
                        />
                    </View>
                    <Text style={styles.aboutText}>Single</Text>
                </View>
            </View>
            <View style={styles.splitLine}></View>
            <View style={styles.detailsContainer}>
                <Text style={styles.infoTitle}>Contact Me</Text>
                <View style={styles.aboutSection}>
                    <View style={styles.iconPlaceholder}>
                        <Ionicons name="call" size={30} color="#000" />
                    </View>
                    <Text style={styles.aboutText}>0926-460-5988</Text>
                </View>
                <View style={styles.aboutSection}>
                    <View style={styles.iconPlaceholder}>
                        <Ionicons name="logo-facebook" size={30} color="#000" />
                    </View>
                    <Text style={styles.aboutText}>Axel Llagas Paredes</Text>
                </View>
                <View style={styles.aboutSection}>
                    <View style={styles.iconPlaceholder}>
                        <Ionicons name="mail" size={30} color="#000" />
                    </View>
                    <Text style={styles.aboutText}>
                        paredes.axel456@gmail.com
                    </Text>
                </View>
                <View style={styles.aboutSection}>
                    <View style={styles.iconPlaceholder}>
                        <Ionicons name="logo-github" size={30} color="#000" />
                    </View>
                    <Text style={styles.aboutText}>github.com/Fujitive013</Text>
                </View>
            </View>
            <View style={styles.splitLine}></View>
            <View style={styles.detailsContainer}>
                <Text style={styles.infoTitle}>Other Details</Text>
                <View style={styles.aboutSection}>
                    <View style={styles.iconPlaceholder}>
                        <Ionicons name="build-outline" size={30} color="#000" />
                    </View>
                    <Text style={styles.aboutText}>Skills and Experiences</Text>
                    <TouchableOpacity
                        style={styles.orangeButton}
                        onPress={() =>
                            navigation.navigate("Skills and Experiences")
                        }
                    >
                        <Ionicons
                            name="chevron-forward-outline"
                            size={15}
                            color="#FFF"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.aboutSection}>
                    <View style={styles.iconPlaceholder}>
                        <Ionicons name="code-outline" size={30} color="#000" />
                    </View>
                    <Text style={styles.aboutText}>Projects</Text>
                    <TouchableOpacity
                        style={styles.orangeButton}
                        onPress={() => navigation.navigate("My Projects")}
                    >
                        <Ionicons
                            name="chevron-forward-outline"
                            size={15}
                            color="#FFF"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default MainProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    backgroundImageContainer: {
        width: "100%",
        height: height * 0.22,
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    profileImageContainer: {
        marginTop: -60,
        alignItems: "center",
    },
    profileImage: {
        width: width * 0.3,
        height: width * 0.3,
        borderRadius: width * 0.15,
    },
    nameContainer: {
        marginTop: 10,
        alignItems: "center",
    },
    nameText: {
        fontSize: width * 0.05,
        fontWeight: "bold",
        color: "#333",
    },
    tagsContainer: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    tags: {
        color: "#FFF",
        paddingVertical: 5,
        paddingHorizontal: 15,
        margin: 5,
        backgroundColor: "#d88720",
        borderRadius: 15,
        fontSize: width * 0.035,
        fontWeight: "bold",
    },
    detailsContainer: {
        marginTop: 15,
        paddingHorizontal: 20,
    },
    infoTitle: {
        fontSize: width * 0.045,
        fontWeight: "bold",
        color: "#d88720",
        marginBottom: 10,
    },
    aboutSection: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    iconPlaceholder: {
        width: 40,
        height: 40,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    aboutText: {
        fontSize: width * 0.04,
        color: "#333",
        flexShrink: 1,
    },
    splitLine: {
        backgroundColor: "#000",
        width: "90%",
        height: 3,
        alignSelf: "center",
    },
    orangeButton: {
        backgroundColor: "#d88720",
        borderRadius: 5,
        padding: 4,
        marginLeft: "auto",
    },
});
