import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ColorConst } from '../constants';


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
        color: ColorConst.white,
        fontSize: 16,
        fontWeight: 'bold',
    },

});


