import MainLayout from '../layouts/MainLayout';
import React from 'react';
import { View, Text } from 'react-native';

function About({}){
    return(
        <MainLayout>
            <View>
                <Text>Sourabh's Cool To Do List App</Text>
                <Text>Created by Sourabh Thakur</Text>
                <Text>Version: 0.1.2131231</Text>
            </View>
        </MainLayout>
    );
}

export default About;