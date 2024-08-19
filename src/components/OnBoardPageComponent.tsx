import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button } from './Button'
import { SizeClass } from '../utils/AppTheme'
import { ColorConst, ScreenConst } from '../constants'
import { screenPagesData } from '../constants/DataConst'
import { goBack, navigate, replace } from '../navigations/NavigationService'
import { useDispatch } from 'react-redux'
import { setIsNotOnboardScreens } from '../redux/slice/AppSlice'
interface IOnBoardComp {
    screenIndex: number;
}
export const OnBoardPageComponent = ({ screenIndex }: IOnBoardComp) => {
    const dispatch = useDispatch()
    const onPressNext = () => {
        if (screenIndex === 2) {
            dispatch(setIsNotOnboardScreens(true))
            replace(ScreenConst.LOGIN_SCREEN);
        } else {
            navigate(screenPagesData[screenIndex + 1].name)
        }
    }
    const onPressBack = () => {
        goBack();
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.itemContainer, { width: SizeClass.wp(100) }]}>
                <View style={[styles.header, { marginTop: '5%' }]}>
                    <View style={{ flex: 1, alignSelf: 'flex-start', justifyContent: 'center' }}>
                        <Text style={[styles.btnSkip]}>{screenPagesData[screenIndex].name}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Button handlePress={() => replace(ScreenConst.LOGIN_SCREEN)} buttonText='Skip' />

                    </View>
                </View>
                <View style={{ flex: 0.7 }}>
                    <Image
                        source={screenPagesData[screenIndex].image}
                        style={[{ width: 250, height: 250, alignItems: 'center', justifyContent: 'center', marginTop: '10%' }]}
                        resizeMode="contain"
                    />
                </View>

                <View style={{ flex: 0.5, width: SizeClass.wp(100), alignItems: 'center' }}>
                    <Text style={[styles.textHeading,]}>
                        {screenPagesData[screenIndex].heading}
                    </Text>
                    <Text style={[styles.textTitle,]}>
                        {screenPagesData[screenIndex].title}
                    </Text>
                    <Text style={[styles.textItem]}>
                        {screenPagesData[screenIndex].text}
                    </Text>
                </View>
                <View style={styles.buttonView}>
                    <View>
                        {screenIndex !== 0 && <Button handlePress={onPressBack} buttonText='Back' />}
                    </View>
                    <Button handlePress={onPressNext} buttonText={screenIndex == 2 ? 'Get Started' : 'Next'} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorConst.primaryColor,
    },
    pagintionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotStyle: {
        width: 35,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    itemContainer: {
        flex: 1,
        backgroundColor: ColorConst.primaryColor,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textTitle: {
        fontWeight: '800',
        textTransform: 'uppercase',
        color: ColorConst.white,
    },
    textHeading: {
        textTransform: 'uppercase',
        color: ColorConst.white,
        opacity: 0.7
    },
    textItem: {
        fontSize: 20,
        color: ColorConst.white,
        textAlign: 'center',
        justifyContent: 'flex-start',
        marginTop: '5%',
        marginHorizontal: '5%'
    },
    image: {
        height: 160,
        width: 170,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        paddingVertical: 40,
        color: 'red',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '5%',
    },
    inputView: {
        gap: 15,
        width: '100%',
        paddingHorizontal: 40,
        marginBottom: 5,
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 7,
    },
    rememberView: {
        width: '100%',
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 8,
    },
    switch: {
        flexDirection: 'row',
        gap: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rememberText: {
        fontSize: 13,
    },
    forgetText: {
        fontSize: 11,
        color: 'red',
    },
    button: {
        backgroundColor: 'red',
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonView: {
        width: SizeClass.wp(100),
        marginBottom: 20,
        paddingHorizontal: 50,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    optionsText: {
        textAlign: 'center',
        paddingVertical: 10,
        color: 'gray',
        fontSize: 13,
        marginBottom: 6,
    },

    btnContainer: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 100,
        backgroundColor: ColorConst.white,
        // alignItems: 'center',
        // justifyContent: 'center',
        overflow: 'hidden',
        alignSelf: 'flex-end',
        marginHorizontal: '5%',
        marginBottom: '5%'
    },
    btnTextStyle: {
        position: 'absolute',
        fontWeight: '600',
        fontSize: 16,
    },
    btnImageStyle: {
        width: 24,
        height: 24,
        position: 'absolute',
    },
    btnSkip: {
        color: ColorConst.white,
        fontSize: 14,
        fontWeight: '600',
    },

    powerByContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: '5%'
    },
    powerByTextStyle: {
        paddingHorizontal: 5,
        fontWeight: '700',
        color: ColorConst.white,
        opacity: 0.7
    },
    powerByJadwaTextStyle: {
        color: ColorConst.white,
        fontWeight: '800',
        marginBottom: 5
    },

});