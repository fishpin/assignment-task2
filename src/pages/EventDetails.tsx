import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Spacer from '../components/Spacer';
import * as api from '../services/api';
import { AppStackParamList } from '../types/Navigation';
import { User } from '../types/User';

export default function EventDetails({ route }: StackScreenProps<AppStackParamList, 'EventDetails'>) {
    const { event } = route.params;
    const [organizer, setOrganizer] = useState<User>();

    useEffect(() => {
        api.getUser(event.organizerId)
            .then((response) => setOrganizer(response.data))
            .catch((error) => console.log(error));
    }, [event.organizerId]);

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{ uri: event.imageUrl }} />
            <View style={styles.content}>
                <Text style={styles.title}>{event.name}</Text>
                <Spacer size={4} />
                {organizer && (
                    <Text style={styles.organizer}>
                        organized by {organizer.name.first} {organizer.name.last}
                    </Text>
                )}
                <Spacer size={16} />
                <Text style={styles.description}>{event.description}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBF2F5',
    },

    image: {
        height: 210,
    },

    content: {
        paddingTop: 24,
        paddingHorizontal: 24,
        paddingBottom: 40,
    },

    title: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 24,
        lineHeight: 24,
        color: '#5C8599',
    },

    organizer: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 14,
        lineHeight: 14,
        color: '#5C8599',
    },

    description: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
        color: '#5C8599',
    },
});
