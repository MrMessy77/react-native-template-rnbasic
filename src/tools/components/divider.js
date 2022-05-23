import React from 'react';
import { View, StyleSheet } from 'react-native';

export default Divider = (props) => {
    const {
        backgroundColor = '#E1E1E1',
        direction = 'row',
        style = {},
        width
    } = props;

    let containerStyle = { width: '100%', height: StyleSheet.hairlineWidth, backgroundColor: backgroundColor };

    if (direction == 'column') {
        containerStyle.width = width || StyleSheet.hairlineWidth;
        containerStyle.height = '100%';
    }

    return (
        <View style={[containerStyle, style]} />
    )
}