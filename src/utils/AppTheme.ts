import { Dimensions, PixelRatio, Platform } from "react-native";
import { ColorConst } from "../constants";

export const SizeClass = (function Size() {
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const SCREEN_HEIGHT = Dimensions.get("screen").height;
  const WINDOW_HEIGHT = Dimensions.get("window").height;
  const NAVBAR_HEIGHT = SCREEN_HEIGHT * (Platform.OS == 'android' ? 0.1 : 0.07);

  const DEFAULT_MARGIN = SCREEN_WIDTH * 0.05;
  const HEADER_MARGIN = SCREEN_WIDTH * 0.06;
  const SMALL_MARGIN = SCREEN_WIDTH * 0.02;
  const LARGE_MARGIN = SCREEN_WIDTH * 0.06;

  const wp = (percentageValue: any) => {
    return (percentageValue / 100) * SCREEN_WIDTH;
  };

  const hp = (percentageValue: any) => {
    return (percentageValue / 100) * SCREEN_HEIGHT;
  };
  const scaleFont = (size: any) => size / PixelRatio.getFontScale();


  const commonStyles = {
    container: {
      flex: 1,
      // backgroundColor: ColorConst.white,
    },
    card: {
      // shadowColor: ColorConst.gray,
      shadowOffset: { width: 0.5, height: 0.5 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
      elevation: 24,
    },
  };

  return {
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    WINDOW_HEIGHT,
    NAVBAR_HEIGHT,
    DEFAULT_MARGIN,
    HEADER_MARGIN,
    SMALL_MARGIN,
    LARGE_MARGIN,
    wp,
    hp,
    scaleFont,
    commonStyles,
  };
})();
