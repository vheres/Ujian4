import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    const styles = {
        spinnerStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }

    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'}/>
        </View>
    )
}

export { Spinner };