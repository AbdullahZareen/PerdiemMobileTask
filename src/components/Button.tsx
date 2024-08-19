import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


type Props = {
    handlePress: () => void;
    buttonText?: string;
    buttonStyle?: object;
    textStyle?: object;
};

export const Button = ({
    handlePress,
    buttonText = 'Get Started',
    buttonStyle,
    textStyle,
}: Props) => {


    return (
        <TouchableOpacity
            style={[styles.btnContainer, buttonStyle]}
            onPress={handlePress}
        ><Text style={[styles.btnTextStyle, textStyle]}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnContainer: {

    },
    btnTextStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

});


