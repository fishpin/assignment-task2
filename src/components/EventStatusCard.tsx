import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Event, EventStatus } from '../types/Event';
import InfoCard from './InfoCard';

interface EventStatusCardProps {
    event: Event;
    status: EventStatus;
}

export default function EventStatusCard({ event, status }: EventStatusCardProps) {
    switch (status) {
        case 'volunteered':
            return <InfoCard label="Volunteered" color="#00A3FF" backgroundColor="#E5F6FF" featherIconName="check" />;
        case 'full':
            return <InfoCard label="Team is full" color="#8FA7B2" backgroundColor="#D3E2E5" featherIconName="slash" />;
        case 'open':
            return (
                <InfoCard label="Volunteer(s) needed" color="#FF8700" backgroundColor="#F2E6D9">
                    <Text style={styles.count}>
                        {event.volunteersIds.length}
                        <Text style={styles.countSeparator}> of </Text>
                        {event.volunteersNeeded}
                    </Text>
                </InfoCard>
            );
    }
}

const styles = StyleSheet.create({
    count: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 32,
        lineHeight: 36,
        color: '#FF8700',
    },

    countSeparator: {
        fontSize: 24,
    },
});
