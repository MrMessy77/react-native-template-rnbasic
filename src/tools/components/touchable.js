import React from 'react';
import { View, Platform, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default Touchable = (props) => {
    let {
        children,
        containerStyle = {},
        viewStyle = {},
        TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity,
        noHighlight,
        onPress,
        ...attributes
    } = props;

    if (Platform.OS === 'android') {
        noHighlight = true;
    }

    if (noHighlight) {
        TouchableComponent = TouchableWithoutFeedback;
    }

    return (
        <View style={containerStyle}>
            <TouchableComponent
                onPress={onPress}
                background={TouchableNativeFeedback.SelectableBackground()}
                {...attributes}
            >
                <View style={viewStyle}>
                    {children}
                </View>
            </TouchableComponent>
        </View>
    )
}