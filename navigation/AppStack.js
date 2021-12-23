import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import profile from '../screens/profile';
import editProfile from '../screens/editProfile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="RN Social"
            component={HomeScreen}
            options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#2e64e5',
                    fontFamily: 'Kufam-SemiBoldItalic',
                    fontSize: 18,
                },
                headerStyle: {
                    shadowColor: '#fff',
                    elevation: 0,
                },
                headerRight: () => (
                    <View style={{ marginRight: 10 }}>
                        <FontAwesome5.Button
                            name="plus"
                            size={22}
                            backgroundColor="#fff"
                            color="#2e64e5"
                            onPress={() => navigation.navigate('AddPost')}
                        />
                    </View>
                ),
            }}
        />
        <Stack.Screen
            name="HomeProfile"
            component={profile}
            options={{
                title: '',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#fff',
                    shadowColor: '#fff',
                    elevation: 0,
                },
                headerBackTitleVisible: false,
                headerBackImage: () => (
                    <View style={{ marginLeft: 15 }}>
                        <Ionicons name="arrow-back" size={25} color="#2e64e5" />
                    </View>
                ),
            }}
        />
    </Stack.Navigator>
);

const ProfileStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Profile"
            component={profile}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="EditProfile"
            component={editProfile}
            options={{
                headerTitle: 'Edit Profile',
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#fff',
                    shadowColor: '#fff',
                    elevation: 0,
                },
            }}
        />
    </Stack.Navigator>
);

const AppStack = () => {
    const getTabBarVisibility = (route) => {
        const routeName = route.state
            ? route.state.routes[route.state.index].name
            : '';

        if (routeName === 'Chat') {
            return false;
        }
        return true;
    };

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#2e64e5',
            }}>
            <Tab.Screen
                name="Home"
                component={FeedStack}
                options={({ route }) => ({
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home-outline"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="Messages"
                component={MessageStack}
                options={({ route }) => ({
                    tabBarVisible: getTabBarVisibility(route),
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="chatbox-ellipses-outline"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default AppStack;
