import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Modal,
    TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Academics = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageUri) => {
        setSelectedImage(imageUri);
        setModalVisible(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalVisible(false);
    };

    const universityImages = [
        require("../assets/school-images/USTP/ustp1.jpg"),
        require("../assets/school-images/USTP/ustp2.jpg"),
        require("../assets/school-images/USTP/ustp3.jpg"),
    ];

    const highschoolImages = [
        require("../assets/school-images/VNHS/vnhs1.jpg"),
        require("../assets/school-images/VNHS/vnhs2.jpg"),
        require("../assets/school-images/VNHS/vnhs3.jpg"),
    ];
    const elementaryImages = [
        require("../assets/school-images/VNCMCS/vncmcs1.jpg"),
        require("../assets/school-images/VNCMCS/vncmcs2.jpg"),
        require("../assets/school-images/VNCMCS/vncmcs3.jpg"),
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.section}>
                <View style={styles.header}>
                    <Ionicons name="school-outline" size={24} color="#333" />
                    <Text style={styles.sectionTitle}>College</Text>
                </View>
                <Text style={styles.schoolName}>
                    University of Science and Technology of Southern Philippines
                </Text>
                <Text style={styles.details}>
                    Status: Undergraduate
                    {"\n"}Location: Claro M. Recto Avenue, Lapasan 9000 Cagayan
                    de Oro City, Philippines
                </Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.imageScroll}
                >
                    {universityImages.map((image, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => openModal(image)}
                        >
                            <Image
                                source={
                                    typeof image === "string"
                                        ? { uri: image }
                                        : image
                                }
                                style={styles.image}
                                resizeMode="stretch"
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.section}>
                <View style={styles.header}>
                    <Ionicons name="school-outline" size={24} color="#333" />
                    <Text style={styles.sectionTitle}>High School</Text>
                </View>
                <Text style={styles.schoolName}>
                    Villanueva National High School
                </Text>
                <Text style={styles.details}>
                    Class of 2020
                    {"\n"}Location: Looc, Villanueva, Misamis Oriental,
                    Philippines
                </Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.imageScroll}
                >
                    {highschoolImages.map((image, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => openModal(image)}
                        >
                            <Image
                                source={
                                    typeof image === "string"
                                        ? { uri: image }
                                        : image
                                }
                                style={styles.image}
                                resizeMode="stretch"
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.section}>
                <View style={styles.header}>
                    <Ionicons name="school-outline" size={24} color="#333" />
                    <Text style={styles.sectionTitle}>Elementary School</Text>
                </View>
                <Text style={styles.schoolName}>
                    Vicente N. Chavez Memorial Central School
                </Text>
                <Text style={styles.details}>
                    Graduation Year: 2016
                    {"\n"}Location: Villanueva, Misamis Oriental, Philippines
                </Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.imageScroll}
                >
                    {elementaryImages.map((image, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => openModal(image)}
                        >
                            <Image
                                source={
                                    typeof image === "string"
                                        ? { uri: image }
                                        : image
                                }
                                style={styles.image}
                                resizeMode="stretch"
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
            >
                <View style={styles.modalContainer}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={closeModal}
                    >
                        <Ionicons
                            name="close-circle-outline"
                            size={36}
                            color="#fff"
                        />
                    </TouchableOpacity>
                    {selectedImage && (
                        <Image
                            source={
                                typeof selectedImage === "string"
                                    ? { uri: selectedImage }
                                    : selectedImage
                            }
                            style={styles.modalImage}
                            resizeMode="contain"
                        />
                    )}
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 16,
    },
    section: {
        marginBottom: 24,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 8,
        color: "#333",
    },
    schoolName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#444",
        marginBottom: 8,
    },
    details: {
        fontSize: 14,
        color: "#666",
        marginBottom: 12,
        lineHeight: 20,
    },
    imageScroll: {
        flexDirection: "row",
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 8,
        borderRadius: 8,
        backgroundColor: "#ccc",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.8)",
    },
    modalImage: {
        width: "90%",
        height: "70%",
        borderRadius: 10,
    },
    closeButton: {
        position: "absolute",
        top: 40,
        right: 20,
    },
});

export default Academics;
