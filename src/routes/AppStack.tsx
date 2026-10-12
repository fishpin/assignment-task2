import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppStackParamList } from '../types/Navigation';

const { Navigator, Screen } = createStackNavigator<AppStackParamList>();

import Login from '../pages/Login';
import EventsMap from '../pages/EventsMap';
import EventDetails from '../pages/EventDetails';
import { AuthenticationContext, AuthenticationContextObject } from '../context/AuthenticationContext';
import { User } from '../types/User';

export default function Routes() {
    const [authenticatedUser, setAuthenticatedUser] = useState<User>();

    const authenticationContextObj: AuthenticationContextObject = {
        value: authenticatedUser as User,
        setValue: setAuthenticatedUser,
    };

    return (
        <AuthenticationContext.Provider value={authenticationContextObj}>
            <NavigationContainer>
                <Navigator
                    screenOptions={{
                        headerShown: false,
                        cardStyle: { backgroundColor: '#F2F3F5' },
                    }}
                >
                    <Screen name="Login" component={Login} />

                    <Screen name="EventsMap" component={EventsMap} />

                    <Screen
                        name="EventDetails"
                        component={EventDetails}
                        options={{
                            headerShown: true,
                            title: 'Event',
                            headerTitleAlign: 'center',
                            headerTintColor: '#15B6D6',
                            headerBackTitleVisible: false,
                            headerBackImage: ({ tintColor }) => <Feather name="arrow-left" size={24} color={tintColor} />,
                            headerLeftContainerStyle: { paddingLeft: 14 },
                            headerStyle: {
                                backgroundColor: '#F9FAFC',
                                elevation: 0,
                                shadowOpacity: 0,
                                borderBottomWidth: 1,
                                borderBottomColor: '#DDE3F0',
                            },
                            headerTitleStyle: {
                                fontFamily: 'Nunito_600SemiBold',
                                fontSize: 15,
                                color: '#8FA7B2',
                            },
                        }}
                    />
                </Navigator>
            </NavigationContainer>
        </AuthenticationContext.Provider>
    );
}
