import { Dimensions, Platform } from "react-native";
import { getBottomSpace, getStatusBarHeight, isIphoneX } from "react-native-iphone-x-helper";

/**
 * @see https://github.com/ptelad/react-native-iphone-x-helper
 * safe iPhoneX: 44,
 * unsafe iPhoneX: 30,
 * other iPhones: 20,
 * android: StatusBar.currentHeight
 */
const statusBarHeight = getStatusBarHeight();

/**
 * @see https://github.com/ptelad/react-native-iphone-x-helper
 * iPhoneX: 34,
 * others: 0
 */
const bottomSpace = getBottomSpace();

/** XD dimensions */
const basicDimensions = {
    width: 375,
    height: 812,
};

const deviceDimensions = {
    width: Dimensions.get('screen').width,
    height: isIphoneX() || Platform.OS === 'android' ?
        Dimensions.get('screen').height - (statusBarHeight + bottomSpace) :
        Dimensions.get('screen').height,
};

/** height scaler를 써야하는 상황을 제외한 모든 경우에서 쓸 수 있는 scaler */
const scaler = (width: number): number => {
    const scale = deviceDimensions.width / basicDimensions.width;
    return Math.round(width * scale);
};

const heightScaler = (height: number): number => {
    const scale = deviceDimensions.height / basicDimensions.height;
    return Math.round(height * scale);
};

const fontScaler = (fontSize: number): number => {
    const scale = Math.sqrt(deviceDimensions.height / basicDimensions.height);
    return Math.round(fontSize * scale);
};

export {
    scaler,
    heightScaler,
    fontScaler,
};