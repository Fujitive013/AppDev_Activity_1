import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./screens/LandingPage";
import MainProfile from "./screens/MainProfile";
import MyProjects from "./screens/MyProjects";
import MyHobbies from "./screens/MyHobbies";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="LandingPage"
                    component={LandingPage}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="MainProfile"
                    component={MainProfile}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="My Projects"
                    component={MyProjects}
                    options={{
                        headerShown: true,
                    }}
                />
                <Stack.Screen
                    name="My Hobbies"
                    component={MyHobbies}
                    options={{
                        headerShown: true,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
