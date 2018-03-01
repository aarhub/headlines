import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const uiHeight = 640;

export function px2dp(px) {
    return px * deviceHeight / uiHeight;
}

export function getWidth() {
    return deviceWidth;
}