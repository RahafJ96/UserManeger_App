import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View
            style={{
                width: 6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Next</Text>
    </TouchableOpacity>
);

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
);

const onboardingPage = ({ navigation }) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../assets/onboarding1.png')} />,
                    title: 'Welcome to our App',
                    subtitle: 'A New way to connect with the world',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/onboarding2.png')} />,
                    title: 'Testing',
                    subtitle: 'test',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../assets/onboarding3.png')} />,
                    title: 'Testing 3',
                    subtitle: "test3",
                },
            ]}
        />
    );
};

export default onboardingPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});